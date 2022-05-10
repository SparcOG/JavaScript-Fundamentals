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

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}`;
}

function describePopulation(country, populationOne) {
  const calculatPercentage = percentageOfWorld1(populationOne);
  return `${country} has ${populationOne} million people, which is about ${calculatPercentage} of the world`;
}

console.log(describePopulation("Ukraine", 44));
console.log(describePopulation("Poland", 37));
console.log(describePopulation("Canada", 38));

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

const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolhins = calcAverage(85, 54, 41);
const koalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win ${avgDolhins} vs. ${avgKoalas}`);
  } else if (koalas >= 2 * dolhins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
  } else {
    console.log(`Nobody won 😒`);
  }
};

checkWinner(dolhins, koalas);
