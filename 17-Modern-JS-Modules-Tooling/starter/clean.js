<<<<<<< HEAD
// import { get } from '/core-js/core/dict';
// import get from '/core-js/es/get';

const budget = [
=======
'strict mode'

// import { add } from "lodash-es";

const budget = Object.freeze([
>>>>>>> cdc36e1388c6b3c9d75db4a89d20a9e71774c53b
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
<<<<<<< HEAD
];

const spendinglimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = (limits, user) => spendinglimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();
  // const limit = spendinglimits[user] ? spendinglimits[user] : 0;

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description: description, user: user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpense = function () {
  for (const entry of budget) {
    const limit = spendinglimits?.[entry.user] ?? 0;

    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpense();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output += entry.value - bigLimit ? `${entry.description.slice(-2)} /` : ''; // Emojis are 2 chars
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);
=======
]);

const spendinglimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendinglimits.jay = 200;
// console.log(spendinglimits);


const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limits, value, description, user = 'jonas') {
const cleanUser = user.toLowerCase();
  // const limit = spendinglimits[user] ? spendinglimits[user] : 0;

  return value <= getLimit(limits, cleanUser) ? [...state, { value: -value, description, user: cleanUser }] : state;
}
const newBudget1 = addExpense(budget, spendinglimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendinglimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendinglimits, 200, 'Stuff', 'Jay');


// const checkExpense = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry;
//   });
// };

const checkExpense = (state, limits) => state.map(entry => entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry);


const finalBudget = checkExpense(newBudget3, spendinglimits);
console.log(finalBudget);


const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget)
  //   output += entry.value - bigLimit ? `${entry.description.slice(-2)} /` : ''; // Emojis are 2 chars
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const bigExpenses = state.filter(entry =>  entry.value  <= -bigLimit).map(entry => entry.description.slice(-2)).join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
console.log('Hello world!');

console.log('Нужно загрузить проект в код спейс, пока это плохо получилось');
>>>>>>> cdc36e1388c6b3c9d75db4a89d20a9e71774c53b
