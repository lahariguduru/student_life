import serial, argparse, sys
import os
from datetime import datetime
# from Tkinter import *

parser = argparse.ArgumentParser(description="Serial port")
parser.add_argument('--port', dest='port', required=True)
args = parser.parse_args()

port = args.port
file_ts = datetime.now().strftime('%Y-%m-%d %H-%M-%S')
baud_rate = 9600; #In arduino, Serial.begin(baud_rate)
file_name = "pulse_ " + str(file_ts) + ".txt"
root_path = os.path.dirname(__file__)
file_path = os.path.abspath(os.path.join(root_path, "data", file_name))

output_file = open(file_path, "w+")
os.startfile(file_path)

try:
    ser = serial.Serial(port, baud_rate)
except:
    print("\n\tInvalid port entered!\n")
    sys.exit()

while True:
    line = ser.readline()
    line = line.strip('\r\n')
    lineArr = line.split(',')
    ts = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    # line = line.decode("utf-8") #ser.readline returns a binary, convert to string
    try:
        if(len(lineArr) != 2):
            continue

        pulse = int(lineArr[0])
        bpm = int(lineArr[1])
        if pulse < 1000 or bpm <1000:
            svOut = str(ts) + " [Pulse :" + str(pulse) + " , BPM :" + str(bpm) + "]\n"
            print(svOut)     
            output_file.write(svOut)
        else:
            print("Invalid! too large\n")

    except ValueError:
        print("Invalid! cannot cast\n")

# class User:


#     def __init__(self, gender, weight, bac, heartrate, yaxis, units):
#         self.gender = gender
#         self.weight = weight
#         self.bac = 0
#         self.heartrate = heartrate
#         self.yaxis = yaxis
#         self.units = 0
#         self.hours = 0

#     def set_heartrate(self, rate):
#         self.heartrate = rate
    
#     def get_heartrate(self):
#         return self.heartrate
    
#     def increment_units(self):
#         units += 1
    
#     def get_units(self):
#         return self.units

#     def set_bac(self, hours):
#         weight_in_grams = self.weight * 2.2 * 1000
#         formula = 100 * (self.units * 8) / (weight_in_grams)
#         if (self.gender == "male"):
#             formula *= (0.68)
#         else:
#             formula *= 0.55

#         formula -= (hours * 0.015)
#         self.bac = formula
        
#     def get_bac(self):
#         return self.bac