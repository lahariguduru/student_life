
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <PulseSensorPlayground.h> 

Adafruit_MPU6050 mpu;
PulseSensorPlayground pulseSensor;

const int PulseWire = 0;  
int PulseSensorPurplePin = 1;  
int Threshold = 550; 

const int button_pin = 7;
const int motor_pin = 8;

int button_state;

void setup(void) {
  Serial.begin(115200);
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");
  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);

  Serial.println("");
  pulseSensor.analogInput(PulseWire);
  pulseSensor.setThreshold(Threshold);   
  if (pulseSensor.begin()) {
    Serial.println("We created a pulseSensor Object !");  //This prints one time at Arduino power-up,  or on Arduino reset.  
  }

  pinMode(button_pin,INPUT);  // set button pin as input
  pinMode(motor_pin,OUTPUT);
  delay(100);
}

void loop() {

  /* Get new sensor events with the readings */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  /* Print out the values */
  if(a.acceleration.z > -9){ 

    
    Serial.print(", Z: ");
    Serial.print(a.acceleration.z);
    Serial.println(" m/s^2");
    digitalWrite(motor_pin,HIGH);
  }
  else{
    digitalWrite(motor_pin,LOW);
  }
  
  if (pulseSensor.sawStartOfBeat()) {            // Constantly test to see if "a beat happened".
    int myBPM = pulseSensor.getBeatsPerMinute();
    int Signal = analogRead(PulseSensorPurplePin);  // Calls function on our pulseSensor object that returns BPM as an "int".
                                               // "myBPM" hold this BPM value now. 
     // If test is "true", print a message "a heartbeat happened".
    Serial.print("BPM: ");                        // Print phrase "BPM: " 
    Serial.println(myBPM);
                   // Print the value inside of myBPM. 
}

button_state = digitalRead(button_pin); 
 // read button state
  if(button_state == HIGH){           // if button is pushed
    digitalWrite(motor_pin,HIGH);     // turn motor on
    Serial.println("ON");
  }
  else{
    digitalWrite(motor_pin, LOW);
  }
 
  Serial.flush();
  delay(50);
  
}