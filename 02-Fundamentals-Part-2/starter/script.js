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

const populationcCountry = 38;

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}`;
}

const population = percentageOfWorld1(populationcCountry);
console.log(population);
