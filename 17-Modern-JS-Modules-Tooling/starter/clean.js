// import { get } from '/core-js/core/dict';
// import get from '/core-js/es/get';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
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
