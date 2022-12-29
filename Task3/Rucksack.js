const fs = require("fs");

let relativePathExampleFile = "./ThirdTaskExample.txt";
let relativePathFirstTask = "./ThirdTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");
let rucksackInput = createArrayFromString(data);

let allRucksacks = createMultipleRucksacks(rucksackInput);
//console.log(allRucksacks);
let totalSumPriority = calculateTotalSumPriorities(allRucksacks);
console.log(totalSumPriority);


function calculateTotalSumPriorities(array){
    return array.reduce((sum, rucksack) => sum + rucksack.priorities, 0);
    /*
    let sumPriority = 0;
    for(let i = 0; i < array.length; i++){
        sumPriority += array[i].priorities;
    }
    return sumPriority;
    */
}


function createArrayFromString(text) {
  return text.split(/\r?\n/);
}


function createMultipleRucksacks(input) {
  let rucksacks = [];
  let rucksack = {};

  for (let i = 0; i < input.length; i++) {
    rucksack = splitTextInHalf(input[i]);
    rucksack.sameCharacters = getSameCharacterFromTexts(
      rucksack.firstCompartment,
      rucksack.secondCompartment
    );
    if(rucksack.firstCompartment.length !== rucksack.secondCompartment.length){
}
    rucksack.priorities = calculatePriorities(rucksack.sameCharacters);
    rucksacks.push(rucksack);
  }
  return rucksacks;
}


function getSameCharacterFromTexts(firstText, secondText) {
  let sameCharacters = [];
  for (let i = 0; i < firstText.length; i++) {
    for (let j = 0; j < secondText.length; j++) {
      if (firstText.charAt(i) === secondText.charAt(j)) {
        if (sameCharacters.indexOf(secondText.charAt(j)) == -1) {
          sameCharacters.push(secondText.charAt(j));
        }
      }
    }
  }
  return sameCharacters;
}

function splitTextInHalf(text) {
  let middle = text.length / 2;
  let object = _createRucksackObject();
  object.firstCompartment = text.substring(0, middle).trim();
  object.secondCompartment = text.substring(middle).trim();
  return object;
}

function _createRucksackObject() {
  return {
    firstCompartment: "",
    secondCompartment: "",
    sameCharacters: [],
    priorities: 0,
  };
}

function calculatePriorities(sameCharacters) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let priorities = 0;
  for (let i = 0; i < sameCharacters.length; i++) {
    priorities += alphabet.indexOf(sameCharacters[i]) + 1; //because index starts with 0
  }
  return priorities;
}
