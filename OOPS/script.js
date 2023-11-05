'use strict';

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // !!  Never do this because of performance
  //   this.fullName = function () {
  //     return this.firstName + this.lastName;
  //   };
  //   console.log(this);
};

const myName = new Person('manipriyan', 'GS');
console.log('myName :>> ', myName);

// 1. new {} is created
// 2. function is called and assigned this={} newly created obj
// 3. that obj{} is linked to prototype
// 4. function automatically returns the this

const friendName = new Person('Gopal', 'm');

console.log(myName instanceof Person);

console.log(Person.prototype, 'prototype');
// Prototypes
Person.prototype.fullName = function () {
  console.log(this.firstName + this.lastName);
};

myName.fullName();

console.log(myName.__proto__, 'myName');
console.log(Person.prototype, 'Person');
console.log(myName.__proto__ === Person.prototype, 'equals');
console.dir(Person.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property.
 The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const newCar1 = new Car('toyota', 77);
newCar1.accelerate();

const newCar2 = new Car('Tata', 77);
newCar2.brake();

// class
// class expression
// const PersonClass = class {};

// class declaration
class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    console.log(this.firstName + this.lastName);
  }
  get getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
  static hey() {
    console.log('hey');
  }
}

const hari = new PersonClass('hari', 'GS');
console.log(hari);
hari.fullName();

PersonClass.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

PersonClass.hey();
// hari.hey();
hari.greet();
console.log(hari.getFullName, 'getter');

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
