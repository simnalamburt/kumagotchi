#include "Arduino.h"

// 가속도계
int x = A3;
int y = A2;
int z = A1;

int tilt = 3;
int fsr1 = A5;
int fsr2 = A0;

void setup() {
    pinMode(x, INPUT);
    pinMode(y, INPUT);
    pinMode(z, INPUT);

    pinMode(tilt, INPUT);
    pinMode(fsr1, INPUT);
    pinMode(fsr2, INPUT);
    Serial.begin(9600);
}

void loop() {
  // print labels
    int x_ = analogRead(x);
    int y_ = analogRead(y);
    int z_ = analogRead(z);

    int tilt_ = digitalRead(tilt);
    int fsr1_ = analogRead(fsr1);
    int fsr2_ = analogRead(fsr2);

    Serial.print("tilt: ");
    Serial.print(tilt_);
    Serial.print("\tfsr1: \t");
    Serial.print(fsr1_);
    Serial.print("\tfsr2: \t");
    Serial.print(fsr2_);
    Serial.print("\tx: ");
    Serial.print(x_);
    Serial.print("\ty: ");
    Serial.print(y_);
    Serial.print("\tz: ");
    Serial.println(z_);
    delay(100);
}
