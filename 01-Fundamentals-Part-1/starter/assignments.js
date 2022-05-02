// = 78 / (169 * 169);
// const country = "Ukranine";
// const continent = "Europ";
// let population = 44;
// let finland = 6;
// let averagePopulation = 33;
// language = "English";
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
// const isIsland = false;
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
//   console.log(`Mark"s BMI (${marksIbm}) is higher than John"s (${johnIbm})`);
// } else {
//   console.log("John"s BMI is higher than Mark"s!");
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

// if (language === "English" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// if (dolphins > koalas) {
//   console.log("Dolphins win :)");
// } else if (dolphins === koalas) {
//   console.log("Koalas and Dolphins win :)");
// } else {
//   console.log("Koalas win :)");
// }

// const dolphinsTwo = (97 + 112 + 101) / 3;
// const koalasTwo = (109 + 95 + 123) / 3;
// const minimumScore = 100;
// console.log(dolphinsTwo, koalasTwo);

// if (dolphinsTwo > koalasTwo) {
//   if (dolphinsTwo > minimumScore) {
//     console.log("DolphinsTwo win :)");
//   } else {
//     console.log("Dont have 100. Not win");
//   }
// } else {
//   if (koalasTwo > minimumScore) {
//     console.log("KoalasTwo win :)");
//   } else {
//     console.log("KoalasTwo dont have 100. Not win");
//   }
// }

// const dolphins = (97 + 112 + 80) / 3;
// const koalas = (109 + 95 + 50) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100) {
//   console.log("Dolphins wins 🏆");
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log("Koalas wins 🏆");
// } else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//   console.log("Both win 🏆");
// } else {
//   console.log("No one wins 😒");
// }

// const day = "dsfbsdfb";

// if (day === "monday") {
//   console.log("Plan course structure");
// } else if (day === "tuesday") {
//   console.log("Prepapre theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend 😁");
// } else {
//   console.log("Not't a valid day!");
// }

// const language = "sdfvsdfv";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too 😁");
// }

// const country = "Ukranine";
// const population = 44;
// population >= 33
//   ? console.log(`${country} population is above average`)
//   : console.log(`${country} population is below average`);

// //Jonathan's version
// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

const bill = 4;
const tipFifteen = 15 / 100;
const tipTwenty = 20 / 100;

// if (bill >= 50 && bill <= 300) {
//   console.log(
// `The bill was ${bill}, the tip was ${
//   bill * tipFifteen
// }, and the total value ${bill * tipFifteen + bill}`
//   );
// } else {
//   console.log(
// `The bill was ${bill}, the tip was ${
//   bill * tipTwenty
// }, and the total value ${bill * tipTwenty + bill}`
//   );
// }

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${
        bill * tipFifteen
      }, and the total value ${bill * tipFifteen + bill}`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${
        bill * tipTwenty
      }, and the total value ${bill * tipTwenty + bill}`
    );
