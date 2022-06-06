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
    str = str + ` ... ${arr[i]}°C in ${i + 1} days`;
  }
  console.log(str);
};

const amplitudeBug = printForecast(testDataTwo);

// if (arr.length > 3) {
//   console.log(
//     `... ${arr[0]}°C in 1 days ... ${arr[1]}°C in 2 days ... ${arr[2]}°C in 3 days ... ${arr[3]}°C in 4 days ... ${arr[4]}°C`
//   );
// } else {
//   console.log(
//     `... ${arr[0]}°C in 1 days ... ${arr[1]}°C in 2 days ... ${arr[2]}°C`
//   );
// }
