import openai
import openfoodfacts
import serial
from flask import Flask, request, jsonify

openai.api_key = "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"

app = Flask(__name__)


class TripScore:
    milk = '0742365264450'

    # chocky = '0818290017031'
    # pomme = '3175681851849'
    # product1 = openfoodfacts.products.get_product(serial)
    # product2 = openfoodfacts.products.get_product(chocky)
    # product3 = openfoodfacts.products.get_product(pomme)

    def __init__(self, name):
        self.name = name
        self.currProducts = dict()
        self.size = 0
        self.currScore = 0

    # print(product1['product']['ecoscore_score'])

    # print(product1['product']['ecoscore_grade'])

    # for x in product2['product']:
    #     print(x)
    #     pass
    # print(product2['product']['ecoscore_score'])
    # print(product2['product']['ecoscore_grade'])

    def generate_text(self, prompt):
        response = openai.Completion.create(
            engine="davinci", prompt=prompt, max_tokens=256, n=1, stop=None, temperature=0.5)
        for x in response.choices:
            print(x)
        return response.choices[0].text.strip()

    def getProductName(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productName = product['product']['product_name']
        return productName

    def getBrand(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        brand = product['product']['brands']
        return brand

    def getScore(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productScore = product['product']['ecoscore_score']
        return productScore

    def addProduct(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productScore = product['product']['ecoscore_score']
        if not self.currProducts.__contains__(self.getProductName(barcode)):
            self.currProducts.setdefault(self.getProductName(barcode), 1)
        else:
            self.currProducts[self.getProductName(barcode)] += 1
        self.size += 1
        self.currScore += productScore
        self.currScore /= self.size

    def getCurrScore(self):
        return self.currScore

    def getScoreWeight(self, barcode):
        return self.getScore(barcode) / self.size

    def getSize(self):
        return self.size

    def getCurrProducts(self):
        return self.currProducts

    def reset(self):
        self.size = 0
        self.currScore = 0
        self.currProducts = dict()

    def getName(self):
        return self.name

    def getNutriScore(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productScore = product['product']['nutriscore_score']
        return productScore

    def getEcoScoreData(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productScore = product['product']['ecoscore_data']
        return productScore

    def getDiscount(self):
        if (self.currScore >= 50 and self.currScore < 80):
            return 5
        elif (self.currScore >= 80):
            return 10
        else:
            return 0

    def printInfo(self):
        print(self.currScore)
        print(self.currProducts)
        print(self.size)
        print(self.getDiscount())


# def readserial(comport, baudrate):
#     ser = serial.Serial(comport, baudrate, timeout=0.1)         # 1/timeout is the frequency at which the port is read
#     while True:
#         data = ser.readline().decode().strip()
#         if data:
#             return data


# if __name__ == '__main__':

#     while True:

#         print(readserial('COM9', 115200))

class User:

    def __init__(self, name):
        self.name = name
        self.cumulativeScore = 0
        self.rewardPoints = 0
        self.numTrips = 0
        self.pastTrips = dict()

    def getCumulativeScore(self):
        return self.cumulativeScore

    def addTrip(self, trip=TripScore):
        self.cumulativeScore += trip.getCurrScore()
        self.numTrips += 1
        self.cumulativeScore /= self.numTrips
        self.pastTrips.setdefault(trip.getCurrScore(), trip.getCurrProducts())

    def printInfo(self):
        print(self.cumulativeScore)
        print(self.pastTrips)
        print(self.numTrips)


class Runner:

    def readserial(comport, baudrate):
        # 1/timeout is the frequency at which the port is read
        ser = serial.Serial(comport, baudrate, timeout=0.1)
        while True:
            data = ser.readline().decode().strip()
            if data:
                return data

    @staticmethod
    def main():
        michael = TripScore("Michael")
        michael.addProduct('0742365264450')
        michael.printInfo()
        # michael.reset()
        # michael.printInfo()
        print(michael.getProductName('0742365264450'))
        michael.addProduct('0818290017031')
        michael.printInfo()
        # print(michael.getBrand('0742365264450'))
        # print(michael.getScore('0818290017031'))
        # print(michael.getScoreWeight('0742365264450'))
        # print(michael.getNutriScore('0742365264450'))
        # print(michael.getEcoScoreData('0742365264450'))
        michael.addProduct('0742365264450')
        # result = michael.generate_text("how sustainable is " + michael.getProductName('0742365264450'))
        michael.printInfo()
        # print(result)

        michaelTrips = User("Michael")
        michaelTrips.addTrip(michael)
        michaelTrips.printInfo()


@app.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.get_json()
    serial_code = data['variable']
    print("Serial Code:", serial_code)
    # You can use the received serial_code in your class here.
    # For example:
    trip_score = TripScore("Michael")
    trip_score.addProduct(serial_code)
    trip_score.printInfo()

    brand = trip_score.getBrand(serial_code)
    product_name = trip_score.getProductName(serial_code)
    score = trip_score.getScore(serial_code)

    sustainability_info_product = trip_score.generate_text(f"How sustainable is {product_name}?")
    sustainability_info_brand = trip_score.generate_text(f"Is {brand} a sustainable brand?")
    # sustainability_info_product = f"How sustainable is {product_name}?"
    # sustainability_info_brand = f"Is {brand} sustainable?"
    return jsonify(success=True, brand_name=brand, product_name=product_name, score=score,
                   sustainability_info_product=sustainability_info_product, sustainability_info_brand=sustainability_info_brand)


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)