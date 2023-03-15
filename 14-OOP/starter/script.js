'use strict';
//////////////////////////////////////////////////////////////////
//  203. Efficient Script Loading: defer and async
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jeck', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
//////////////////////////////////////////////////////////////////
//  209. Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
//////////////////////////////////////////////////////////////////
//  210. Prototypal Inheritance and The Prototype Chain (only video)
//////////////////////////////////////////////////////////////////
//  210. Prototypal Inheritance and The Prototype Chain (only video)
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
//////////////////////////////////////////////////////////////////
//  212. Coding Challenge #1

// 1.
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(make, speed);
};

const bmw = new car('BMW', 120);
const mercedes = new car('mercedes', 95);

// 2.
car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
bmw.accelerate();

// 3.
car.prototype.brake = function () {
  console.log(this.speed - 5);
};
mercedes.brake();

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them.
