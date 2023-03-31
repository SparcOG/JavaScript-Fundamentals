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
*/
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
/*
class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
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
console.log(bnw.accelerate());
console.log(bnw.brake());
console.log(bnw.speedUS);
bnw.speedUS = 50;
console.log(bnw);
*/
//////////////////////////////////////////////////////////////////
//  218. Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Nike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
//////////////////////////////////////////////////////////////////
//  219. Coding Challenge #3
/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

Задача по кодированию №3
Ваши задачи:
1. Используйте функцию конструктора для реализации электромобиля (названного 'EV') в качестве дочернего
"класса 'Car'. Помимо марки и текущей скорости, 'EV' также имеет
текущий заряд батареи в % (свойство 'charge').
2. Реализуйте метод 'chargeBattery', который принимает аргумент
'chargeTo' и устанавливает заряд батареи в значение 'chargeTo'.
3. Реализуйте метод 'accelerate', который увеличит скорость автомобиля на 20,
и уменьшит заряд на 1%. Затем выведите в лог сообщение следующего вида: 'Tesla едет со скоростью 140
км/ч, с зарядом 22%".
4. Создайте объект электромобиля и поэкспериментируйте с вызовами 'accelerate',
'brake' и 'chargeBattery' (зарядить аккумулятор до 90%). Обратите внимание, что происходит, когда
вы "ускоряетесь"! Подсказка: изучите определение полиморфизма. 
Тестовые данные:
§ Данные автомобиля 1: "Тесла", движущийся со скоростью 120 км/ч, с зарядом батареи 23%.
*/
/*
// 1.
const car = function (make, currentSpeed, charge) {
  this.make = make;
  this.currentSpeed = currentSpeed;
  this.charge = charge;
};

const EV = function (make, currentSpeed, charge) {
  car.call(this, make, currentSpeed);
  this.charge = charge;
};

// 2.
EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);

// 3.
EV.prototype.accelerate = function (currentSpeed, charge) {
  this.currentSpeed += currentSpeed;
  this.charge -= charge;
  console.log(`${this.make} going at ${this.currentSpeed}
  km/h, with a charge of ${this.charge}%`);
};
tesla.accelerate(20, 1);
console.log(tesla);

// 4.
const electricCar = new EV('BNW', 160, 10);
electricCar.chargeBattery(90);
electricCar.accelerate(10, 2);
electricCar.accelerate(15, 3);
console.log(electricCar);
*/
//////////////////////////////////////////////////////////////////
//  220. Inheritance Between "Classes": ES6 Classes
/*
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // A;ways needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  cllcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.cllcAge();
*/
//////////////////////////////////////////////////////////////////
//  221. Inheritance Between "Classes": Object.create
/*
const PersonProto = {
  cllcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Compuetr Science');
jay.introduce();
jay.cllcAge();
*/
//////////////////////////////////////////////////////////////////
//  222. Another Class Example
//////////////////////////////////////////////////////////////////
//  223. Encapsulation: Protected Properties and Methods
//////////////////////////////////////////////////////////////////
//  224. Encapsulation: Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

// class Account {
//   // 1. Public fields
//   locale = navigator.language;

//   // 2. Private fields (only istances has ecses)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 11111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(250);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
// console.log(acc1.pin);

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);

// Account.helper();

//////////////////////////////////////////////////////////////////
//  225. Chaining Methods

// acc1.deposit(300).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

//////////////////////////////////////////////////////////////////
//  226. ES6 Classes Summary
//////////////////////////////////////////////////////////////////
//  227. Coding Challenge #4
/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.make = make;
    this.currentSpeed = currentSpeed;
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate(currentSpeed, charge) {
    this.currentSpeed += currentSpeed;
    this.#charge -= charge;
    console.log(`${this.make} going at ${this.currentSpeed}
  km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);

tesla.accelerate(20, 1);
console.log(tesla);

const electricCar = new EVCl('BNW', 160, 10);
electricCar.chargeBattery(90).accelerate(10, 2).accelerate(15, 3);
console.log(electricCar);
