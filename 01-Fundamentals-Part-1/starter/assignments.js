// = 78 / (169 * 169);
const country = "Ukranine";
// const continent = "Europ";
let population = 44;
// let finland = 6;
// let averagePopulation = 33;
language = "English";
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
const isIsland = false;
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

// if (population >= 120) {
//   console.log(`${country} population is above average`);
// } else {
//   console.log(`${country} population is ${120 - population} below average`);
// }

// const marksWeights = 78;
// const marksTall = 169;
// const johnsWeights = 92;
// const johnTall = 195;

// const marksIbm = marksWeights / marksTall ** 2;
// const johnIbm = johnsWeights / johnTall ** 2;

// const markHigherBMI = marksIbm > johnIbm;

// if (marksIbm > johnIbm) {
//   console.log(`Mark's BMI (${marksIbm}) is higher than John's (${johnIbm})`);
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// console.log(marksIbm, johnIbm, markHigherBMI);

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //fals
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
