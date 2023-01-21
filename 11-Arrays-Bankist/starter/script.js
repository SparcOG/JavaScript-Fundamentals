'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    // .textContent = 0

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const claclDispleyBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calclDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} 💶`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} 💶`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} 💶`;
};

const createUsenames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsenames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  claclDispleyBalance(acc);

  // Display summary
  calclDisplaySummary(acc);
};

// Event handler
let currentAccount;

// Event handler
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
  }
  containerApp.style.opacity = 100;

  // Clear input fields
  inputLoginUsername.value = inputClosePin.value = '';
  inputLoginPin.blur();

  // Update UI
  updateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .index(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let stored = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !stored);
  stored = !stored;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////////////////
/////////////// 142. Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]); // Тот же результат

// SPLICE
// console.log(arr.splice(2));
arr.splice(-2);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Тот же результат

// JOIN
console.log(letters.join(' - '));
*/

///////////////////////////////////////////////////////////////////
/////////////// 143. The new at Method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

/////////////////////////////////////////////////////////////////////////
////////////////////////// 144. Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
*/

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// 145. forEach With Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// 147. Creating DOM Elements
/*
const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    // containerMovements.innerHTML = '';
    // .textContent = 0
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
*/

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Coding Challenge #2
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")
4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far

	Задача по кодированию №1
	Джулия и Кейт проводят исследование о собаках. Каждая из них спросила 5 владельцев собак
	о возрасте их собак и сохранили данные в массив (по одному массиву на каждого). Для
	Сейчас их интересует только то, является ли собака взрослой или щенком.
	Собака является взрослой, если ей не менее 3 лет, и щенком, если ей меньше 3 лет.
	Ваши задачи:
	создать функцию 'checkdogs', которая принимает 2 массива возрастов собак
	('dogsjulia' и 'dogskate') и выполняет следующие действия:
	1. Джулия выяснила, что у хозяев первой и последних двух собак на самом деле есть
	кошки, а не собаки! Поэтому создайте неглубокую копию массива Джулии и удалите кошачий
	из этого скопированного массива (потому что это плохая практика - мутировать параметры функции).
	параметры)
	2. Создайте массив с данными Джулии (исправленными) и Кейт.
	3. Для каждой оставшейся собаки выведите на консоль сообщение о том, является ли она взрослой ("собака номер 1
	взрослая, ей 5 лет") или щенок ("собака номер 2 еще щенок").
	4. Запустите функцию для обоих тестовых наборов данных

тестовые данные:
данные 1: данные джулии [3, 5, 2, 12, 7], данные кейт [4, 1, 15, 8, 3].
данные 2: данные юлии [9, 16, 6, 8, 3], данные кейт [10, 5, 6, 1, 4]

подсказки: используйте инструменты из всех лекций этого раздела на данный момент
*/

/*
const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];

const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (julia, kate) {
  const [...dogs] = [...julia.slice(1, -2), ...kate];
  dogs.forEach(function (years, position) {
    const dogs1 =
      years >= 5
        ? console.log(
            `Dog number ${position + 1} is an adult, and is ${years} years old`
          )
        : console.log(`Dog number ${position + 1} is still a puppy`);
  });
  // const years = element >= 5 ? console.log('more') : console.log('less');
};
checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////150. The map Method
/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);
const movementUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////151. Computing Usernames
/*
const createUsenames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsenames(accounts);
console.log(accounts);
*/
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////152. The filter Method
/*
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

let deposits = [];
const withdrawals = function (mov) {
  mov.forEach(element => {
    if (element < 0) deposits.unshift(element);
  });
};

withdrawals(movements);
console.log(deposits);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 153. The reduce Method
///////////////////////////////////////////////////////////////////////////////
/*
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Interation ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 154. Coding Challenge #2
///////////////////////////////////////////////////////////////////////////////
/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (data) {
  const dogHumanYears = data.map(function (dogs) {
    if (dogs <= 2) return dogs * 2;
    else return 16 + dogs * 4;
  });

  const excludeDogs = dogHumanYears.filter(function (oldDogs) {
    return oldDogs > 18;
  });

  let result =
    excludeDogs.reduce(function (sum, current) {
      return sum + current;
    }, 0) / excludeDogs.length;
  console.log(result);
};
calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  // Same way
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 155. The Magic of Chaining Methods
///////////////////////////////////////////////////////////////////////////////
/*
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })

  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 156. Coding Challenge #3
///////////////////////////////////////////////////////////////////////////////
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

Перепишите функцию 'calcAverageHumanAge' из задания №2, но на этот раз 
в виде стрелочной функции и с использованием цепочки!
Тестовые данные:
§ Данные 1: [5, 2, 4, 1, 15, 8, 3]
§ Данные 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (data) {
  const dogHumanYears = data.map(dogs =>
    dogs <= 2 ? dogs * 2 : 16 + dogs * 4
  );

  const excludeDogs = dogHumanYears.filter(oldDogs => oldDogs > 18);

  let result =
    excludeDogs.reduce((sum, current) => sum + current, 0) / excludeDogs.length;
  return result;
};

console.log(calcAverageHumanAge(data1), calcAverageHumanAge(data2));
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 157. The find Method
///////////////////////////////////////////////////////////////////////////////
/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 158. Implementing Login(work was being done on the application)
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 159. Implementing Transfers(work was being done on the application)
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 160. The findIndex Method(work was being done on the application)
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 161. some and every
////////////////////////////////////////////////////////////////////////////////
/*
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 162. flat and flatMap
////////////////////////////////////////////////////////////////////////////////
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep);

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flat
const overBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overBalance);

// flatMap
const overBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overBalance2);
*/
////////////////////////////////////////////////////////////////////////////////
// Section 11: Working With Arrays - 163. Sorting Arrays
////////////////////////////////////////////////////////////////////////////////
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);

// return < 0, A, B
// return > 0, B, A

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b < a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
