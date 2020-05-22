'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `max speed = ${car._maxSpeed}, speed = ${car._speed}, isOn = ${car._isOn}, distance = ${car._distance}, price = ${car.curentPrice}`,
    );
  }

  constructor(car) {
    this._speed = 0;
    this.curentPrice = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = car.isOn;
    this._distance = 0;
  }

  set price(newPrice) {
    this.curentPrice = newPrice;
  }

  get price() {
    return this.curentPrice;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    let addSpeed = this._speed + value;
    if (addSpeed <= this._maxSpeed) {
      this._speed = addSpeed;
    }
  }

  decelerate(value) {
    let minusSpeed = this._speed - value;
    if (minusSpeed > 0) {
      this._speed = minusSpeed;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000