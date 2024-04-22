class User:

    def __init__(self, gender, weight, bac, heartrate, yaxis, units):
        self.gender = gender
        self.weight = weight
        self.bac = 0
        self.heartrate = heartrate
        self.yaxis = yaxis
        self.units = 0
        self.hours = 0

    def set_heartrate(self, rate):
        self.heartrate = rate
    
    def get_heartrate(self):
        return self.heartrate
    
    def increment_units(self):
        units += 1
    
    def get_units(self):
        return self.units

    def set_bac(self, hours):
        weight_in_grams = self.weight * 2.2 * 1000
        formula = 100 * (units * 8) / (weight_in_grams)
        if (self.gender == "male"):
            formula *= (0.68)
        else:
            formula *= 0.55

        formula -= (hours * 0.015)
        self.bac = formula
        
    def get_bac(self):
        return self.bac