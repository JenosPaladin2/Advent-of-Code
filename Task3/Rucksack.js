const fs = require("fs");

let relativePathExampleFile = "./ThirdTaskExample.txt";
let relativePathFirstTask = "./ThirdTask.txt";

let data = fs.readFileSync(relativePathExampleFile, "utf8");
let rucksackInput = createArrayFromString(data);

let allRucksacks = printText(rucksackInput);
//console.log("das ist final: " + JSON.stringify(allRucksacks, null, 2));

function printText(input) {
  let rucksacks = [];
  let rucksack = {};

  for (let i = 0; i < input.length; i++) {
    rucksack = splitTextInHalf(input[i]);
    rucksack.sameCharacters = getSameCharacterFromTexts(
      rucksack.firstCompartment,
      rucksack.secondCompartment
    );

    rucksack.priorities = calculatePriorities(rucksack.sameCharacters);
    rucksacks.push(rucksack);
  }
  return rucksacks;
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
  console.log("Das ist sameCharacters: " + sameCharacters);
  for (let i = 0; i < sameCharacters.length; i++) {
    priorities += alphabet.indexOf(sameCharacters) + 1; //because index starts with 0
  }
  return priorities;
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

function createArrayFromString(text) {
  return text.split(/\r?\n/);
}

function splitTextInHalf(text) {
  let middle = text.length / 2;
  let object = _createRucksackObject();
  object.firstCompartment = text.substring(0, middle);
  object.secondCompartment = text.substring(middle + 1);
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
