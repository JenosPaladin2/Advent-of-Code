const fs = require("fs");

let relativePathExampleFile = "./AdventOfCodeExample.txt";
let relativePathFirstTask = "./AdventOfCodeFirstTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");

let calories = createCaloriesArray(data);
calories = convertStringIntoNumberArray(calories);
let caloriesPerElves = sumCaloriesPerElf(calories);
console.log(caloriesPerElves);
let highestCalorieOneElf = getHighestCaloriesPerNumberOfElves(caloriesPerElves, 1);
let highestCalorieThreeElves = getHighestCaloriesPerNumberOfElves(caloriesPerElves, 3);



console.log(highestCalorieOneElf);
console.log(highestCalorieThreeElves);


function getHighestCaloriesPerNumberOfElves(arrayCaloriesPerElf,numberOfElvesAtTop) {
  let array = arrayCaloriesPerElf.concat();
  //let array = Array.from(arrayCaloriesPerElf); //another method to copy array from
  let highestSumCaloriesElves = 0;
  console.log(highestSumCaloriesElves);
  let arrayHighestSum = [];

  for (let i = 0; i < numberOfElvesAtTop; i++) {
    let highestSumCalorie = Math.max(...array);
    console.log('highestSumCalorie: '+highestSumCalorie);
    let highestSumCalorieElf = array.indexOf(highestSumCalorie);
    console.log('highestSumCalorieElf: '+highestSumCalorieElf);
    arrayHighestSum = array.splice(highestSumCalorieElf, 1)
    console.log('arrayHighestSum: '+arrayHighestSum);
    highestSumCaloriesElves += arrayHighestSum[0];
    console.log('highestSumCaloriesElves: '+highestSumCaloriesElves);
  }

  return highestSumCaloriesElves;
}

function createCaloriesArray(text) {
  return text.split(/\r?\n/);
}

function sumCaloriesPerElf(calories) {
  let caloriesPerElf = [];
  let sumCalorie = 0;

  for (let i = 0; i < calories.length; i++) {
    if (!hasEmptyValueOnIndex(calories, i)) {
      sumCalorie += calories[i];
    } else {
      caloriesPerElf.push(sumCalorie);
      sumCalorie = 0;
    }
  }
  caloriesPerElf.push(sumCalorie);
  return caloriesPerElf;
}

function hasEmptyValueOnIndex(array, number) {
  return array[number] == "";
}

function convertStringIntoNumberArray(array) {
  let newArray = [];
  let value = 0;

  for (let i = 0; i < array.length; i++) {
    value = !hasEmptyValueOnIndex(array, i) ? parseInt(array[i]) : array[i];
    newArray.push(value);
  }
  return newArray;
}
