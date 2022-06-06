// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const measurKeLelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
//     // value: Number(prompt('Degrees celsius')),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measurKeLelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   debugger;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTYFIFY
// console.log(amplitudeBug);

const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    // str = str + ` ${arr[i]}°C in ${i + 1} days ...`; same thing
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

const amplitudeBug = printForecast(testDataTwo);

// 1) Uderstanding the problem
// - Arrey tranformed to string, separated by ...
// - What is the X days? Answer: Index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Tranform each element to string wiht °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - log string to console

// 1) Понимание проблемы
// - Массив преобразуется в строку, разделенную ...
// - Что такое X дней? Ответ: Индекс + 1

// 2) Разбиение на подпроблемы
// - Преобразовать массив в строку
// - Преобразование каждого элемента в строку с помощью °C
// - Строка должна содержать день (индекс + 1)
// - Добавьте ... между элементами и началом и концом строки
// - Вывести строку на консоль
