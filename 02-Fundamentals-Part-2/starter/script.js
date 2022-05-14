"use strict";

// const country = "Ukraine";
// const population = 44;
// const capitalCity = "Kiev";

// function descripteCountry(country, population, capitalCity) {
//   const descripte = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return descripte;
// }

// const OneDescripte = descripteCountry("Ukraine", 44, "Kiev");
// console.log(OneDescripte);

// const TwoDescripte = descripteCountry("Poland", 37, "Warsaw");
// console.log(TwoDescripte);

// const ThreeDescripte = descripteCountry("Canada", 38, "Ottawa");
// console.log(ThreeDescripte);

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// const descPortugal = describeCountry("Portugal", 10, "Lisbon");
// const descGermany = describeCountry("Germany", 83, "Berlin");
// const descFinland = describeCountry("Finland", 6, "Helsinki");
// console.log(descPortugal, descGermany, descFinland);

// //Обьявление функции
// function percentageOfWorld1(population) {
//   return `${(population / 7900) * 100}`;
// }

// const ukraine = percentageOfWorld1(44);
// const poland = percentageOfWorld1(37);
// const canada = percentageOfWorld1(38);

// console.log(ukraine, poland, canada);

// //Функциональное выражение
// const percentageOfWorld2 = function (population) {
//   return `${(population / 7900) * 100}`;
// };

// const ukraine2 = percentageOfWorld2(44);
// const poland2 = percentageOfWorld2(37);
// const canada2 = percentageOfWorld2(38);

// console.log(ukraine2, poland2, canada2);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);

// console.log(percPortugal1, percChina1, percUSA1);

//Стрелочная функция
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const ukraine = percentageOfWorld3(44);
// const poland = percentageOfWorld3(37);
// const canada = percentageOfWorld3(38);

// console.log(ukraine, poland, canada);

// function percentageOfWorld1(population) {
//   return `${(population / 7900) * 100}`;
// }

// function describePopulation(country, populationOne) {
//   const calculatPercentage = percentageOfWorld1(populationOne);
//   return `${country} has ${populationOne} million people, which is about ${calculatPercentage} of the world`;
// }

// console.log(describePopulation("Ukraine", 44));
// console.log(describePopulation("Poland", 37));
// console.log(describePopulation("Canada", 38));

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million
//   people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation("Portugal", 10);
// describePopulation("China", 1441);
// describePopulation("USA", 332);

// const dolhins = 85 + 54 + 41;
// const koalas = 23 + 34 + 27;

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolhins = calcAverage(85, 54, 41);
// const koalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolhins win ${avgDolhins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
//   } else {
//     console.log(`Nobody won 😒`);
//   }
// };

// checkWinner(dolhins, koalas);

// const ukraine = 44;
// const poland = 37;
// const canada = 38;
// const usa = 329;

// const populations = [ukraine, poland, canada, usa];

// if (populations.length === 4) {
//   console.log("Array contains 4 elements 😁");
// } else {
//   console.log("Array does not contain 4 elements 😥");
// }

// function percentageOfWorld1(population) {
//   return `${(population / 7900) * 100}`;
// }

// percentageOfWorld1(populations[0]);
// percentageOfWorld1(populations[1]);
// percentageOfWorld1(populations[2]);
// percentageOfWorld1(populations[3]);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// const populations = [10, 1441, 332, 83];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// const neighbours = [
//   "Romania",
//   "Moldova",
//   "Hungary",
//   "Slovakia",
//   "Poland",
//   "Belarus",
//   "Russia",
// ];

// neighbours.push("Utopia");
// neighbours.pop();

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country 😊");
// }

// neighbours.indexOf("Poland");
// neighbours[4] = "Republic of Poland";

// console.log(neighbours);

// const neighbours = ["Norway", "Sweden", "Russia"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
// console.log(neighbours);

const bill = 100;
const bills = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [
  `Tipping is ${calcTip(bills[0])} dollars`,
  `Tipping is ${calcTip(bills[1])} dollars`,
  `Tipping is ${calcTip(bills[2])} dollars`,
];
console.log(tips);
