"use strict";

// const country = "Ukraine";
// const population = 44;
// const capitalCity = "Kiev";

function descripteCountry(country, population, capitalCity) {
  const descripte = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return descripte;
}

const OneDescripte = descripteCountry("Ukraine", 44, "Kiev");
console.log(OneDescripte);

const TwoDescripte = descripteCountry("Poland", 37, "Warsaw");
console.log(TwoDescripte);

const ThreeDescripte = descripteCountry("Canada", 38, "Ottawa");
console.log(ThreeDescripte);
