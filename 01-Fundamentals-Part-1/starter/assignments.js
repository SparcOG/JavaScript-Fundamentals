// = 78 / (169 * 169);
// const country = "Ukranine";
// const continent = "Europ";
// let population = 44;
// let finland = 6;
// let averagePopulation = 33;
// language = "Украинский";
// const description =
//   country +
//   " " +
//   "is in" +
//   " " +
//   continent +
//   " " +
//   "and its" +
//   " " +
//   population +
//   " " +
//   "people speak" +
//   " " +
//   language;
// population = population / 2;

// population++;

// const isIsland = "Ukraine";

// console.log(description);
// console.log(population < averagePopulation);
// console.log(population > finland);
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// console.log(country);
// console.log(continent);
// console.log(population);
// isIsland = true;

// let language;

const marksWeights = 78;
const marksTall = 169;
const johnsWeights = 92;
const johnTall = 195;

const marksIbm = marksWeights / marksTall ** 2;
const johnIbm = johnsWeights / johnTall ** 2;

const markHigherBMI = marksIbm > johnIbm;
console.log(marksIbm, johnIbm, markHigherBMI);
