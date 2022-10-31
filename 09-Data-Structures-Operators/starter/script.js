'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES 6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicionus pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('/n');

  for (const row of rows) {
    const [first, two] = row.toLowerCase().trim().split('_');

    const output = `${first}${two}`;
    console.log(output);
  }
});

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// textarea.value = `underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`;

// const transformation = function (textarea) {
//   const split = textarea.value.toLowerCase().split(/\r?\n/);
//   console.log(
//     split[0].replace('_', '').replace('c', 'C').padEnd(20, '     ✅')
//   );
//   console.log(
//     split[1].replace('_', '').padEnd(19, ' ').replace('n', 'N').padEnd(21, '✅')
//   );
//   console.log(
//     split[2].replace('_', '').replace('v', 'V').padEnd(19, ' ').padEnd(22, '✅')
//   );
//   const replaceAge = split[3].split('_');
//   console.log(
//     replaceAge[0].trim() +
//       replaceAge[1].replace('a', 'A').padEnd(10, ' ').padEnd(14, '✅')
//   );
//   const replaceDeparture = split[4].split('_');
//   console.log(
//     replaceDeparture[0] +
//       replaceDeparture[1].replace('d', 'D').padEnd(12, ' ').padEnd(17, '✅')
//   );
// };
// transformation(textarea);

// button.addEventListener('click', transformation);

/*
///////////////////////////////////////////////////////////////
////////////// Working With Strings - part 3
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
underscoreCase
firstName
someVariable
calculateAge 
delayedDeparture 
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas Shmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(37273626));
console.log(maskCreditCard(238298462343883));
console.log(maskCreditCard('23476293847347234534582'));

// Repeat
const message2 = 'Bad waether... All Departues ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*  
//////////////////////////////////////////////////////////////
////////// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const logingEmail = ' Hello@Jonas.Io  \n';

// const lowerEmail = logingEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = logingEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97 💷';
const priceUS = priceGB.replace('💷', '💲').replace(',', '.');

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some foof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
////////////////////////////////////////////////////////////////////////
///////////////////// Working Whith Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
\
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddSeat('11B');
checkMiddSeat('23C');
checkMiddSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

//////////////////////////////////////////////
/////// Coding challenge #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
// const events = new Set(gameEvents.values());
// console.log(events);
// Jonas
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// gameEvents.set(90, 'An event happened, on average, every 9 minutes');
// console.log(gameEvents.get(90));
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`
  An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF]${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF]${key}: ${value}`);
//   }`
// }

// for (let amout of gameEvents.keys) {
//   console.log(amout);
// }

// console.log(new Set([gameEvents]));
// console.log(new Set([...gameEvents]));
// const [events] = [...gameEvents];
// console.log(new Set([...events]));

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
*/
/*
///////////////////////////////////////////////////////////////
////// Maps: Interation

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fireze, Italy');
console.log(rest);



const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fireze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organc'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
//////////////////////////////////////////////
// Setss

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('sdfsjhgasdhasdvasdwaasddas').size);

*/

///////////////////////////////////////////////////////////////
///////////////// Coding Challenge #2

// 1.
// let sum = 0;

// for (const players of game.scored) {
//   // sum = sum + sum or sum += 1
//   sum++;
//   console.log(`Goal ${sum}:`, players);
// }
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2. // Попробуй записать в обычный цикл ради експеримента :)
// // const numbersOdds = Object.values(game.odds);
// // let mediumSum = 0;

// // for (const sum in numbersOdds) {
// //   mediumSum = mediumSum + numbersOdds[sum];
// // }
// // const mediumAverage = mediumSum / numbersOdds.length;
// // console.log(mediumAverage);
// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// // // 3.
// // const [team1, drow, team2] = Object.values(game.odds);
// // console.log(`Odd of victory Bayern Munich: ${team1}
// // Odd of draw: ${drow}
// // Odd of victory Borrussia Dortmund: ${team2}`);
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // 4.
// const scorers = {
//   [game.scored[1]]: 1,
//   [game.scored[3]]: 1,
//   [game.scored[0]]: 2,
// };
// console.log(scorers);
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES 6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicionus pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr = openStr + `${day}, `;
}
console.log(openStr);

// Propery VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value] maybe any name
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`Oh ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisitto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/

/////////////////////////////////////////////
// The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//////////////////////////////////////////////////////////////////
// console.log([...menu.entries()]);
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

// console.log('----- OR -----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(3 || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND -----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*
////////////////////////////////////////////
// Short circuiting (&& and ||)

// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numb3rs) {
//   let sum = 0;
//   for (let i = 0; i < numb3rs.length; i++) sum = sum += numb3rs[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// The Spread Operator(...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str}`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...
// restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// Destrucuting Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Default values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 99;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
sdfvbsdfvsdfbv sdfbsa
// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
*/

// //////////////////////////////////////////////////////////////
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// // console.log(players1, players2);

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2)
// // const gk = game.players[0][0];
// // console.log(gk);

// // const fieldPlayers = [, ...game.players[0]];
// // console.log([, ...fieldPlayers]);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4)
// // const players1Final = [game.players[0], 'Thiago', 'Coutinho',
// // 'Perisic'];
// // console.log(players1Final)
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5)
// let {
//   odds: { team1, x: drow, team2 },
// } = game;
// console.log(team1, drow, team2);

// 6)
// const printGoals = function (...players) {
//   let sum = 0;
//   for (let i = 0; i < players.length; i++) {
//     console.log(...players[i], players[i].length);
//   }
// };
// printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
// printGoals(game.scored);
// const printGoals = function (...players) {
//   console.log(...players, `- ${players.length} gols were scored`);
// };

// printGoals(...['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
// printGoals(...game.scored);

// // 7)
// team1 < team2 && console.log('Team 1 is more likely to win');
// // console.log(game.odds.team2 && game.odds.team1);
