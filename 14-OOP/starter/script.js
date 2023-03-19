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

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
*/
//////////////////////////////////////////////////////////////////
//  209. Prototypes
/*
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
/*
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
  console.log((this.speed += 10));
};
bmw.accelerate();

// 3.
car.prototype.brake = function () {
  console.log((this.speed -= 5));
};
mercedes.brake();

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them.

const lada = new car('Lada', 100);
const honda = new car('honda', 240);

honda.accelerate();
honda.accelerate();
honda.brake();
honda.brake();
lada.accelerate();
lada.accelerate();
lada.brake();
lada.brake();
*/
//////////////////////////////////////////////////////////////////
//  213. ES6 Classes
// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  cllcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.cllcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();
/*
//////////////////////////////////////////////////////////////////
//  214. Setters and Getters
/*
const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
//////////////////////////////////////////////////////////////////
//  216. Object.create
/*
const PersonProto = {
  caclcAge() {
    console.log(2037 - this.birthYear);
  },

  unit(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.caclcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.unit('Sarah', 1979);
sarah.caclcAge();
*/
//////////////////////////////////////////////////////////////////
//  217. Coding Challenge #2
/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK
Ваши задачи:
1. Повторите задачу №1, но на этот раз используя класс ES6 (назовите его 'CarCl').
2. Добавьте геттер под названием 'speedUS', который возвращает текущую скорость в милях в час (разделите
на 1.6)
3. Добавьте сеттер с именем 'speedUS', который устанавливает текущую скорость в милях в час (но
конвертирует ее в км/ч перед сохранением значения, умножая входное значение на 1,6)
4. Создайте новый автомобиль и поэкспериментируйте с методами 'accelerate' и 'brake'.
методами "ускорение" и "торможение", а также с getter и setter.
Тестовые данные:
§ Данные Автомобиль 1: 'Ford', движущийся со скоростью 120 км/ч.
УДАЧИ

Переведено с помощью www.DeepL.com/Translator (бесплатная версия)
*/

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed * 1.6;
  }
  accelerate() {
    return (this.speed += 100);
  }

  brake() {
    return (this.speed -= 100);
  }
}

const ford = new carCl('ford', 120);

const bnw = new carCl('bnw', 200);

console.log(bnw.accelerate());
console.log(bnw.brake());
console.log(bnw.speedUS);
