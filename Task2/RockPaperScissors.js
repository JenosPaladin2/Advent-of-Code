const fs = require("fs");

let relativePathExampleFile = "./SecondTaskExample.txt";
let relativePathFirstTask = "./SecondTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");
let rockPaperScissorInput = createArrayFromString(data);

console.log(rockPaperScissorInput);

let result = processRockPaperScissorInput(rockPaperScissorInput);

console.log("Enemy score: " + result.enemyScore);
console.log("My score: " + result.myScore);

function createArrayFromString(text) {
  return text.split(/\r?\n/);
}

function processRockPaperScissorInput(table) {
  let gameProperties = {
    enemyScore: 0,
    myScore: 0,
  };

  let enemyScore = 0;
  let myScore = 0;

  let gameWithNewStragety = applyWinStrategy(table);
  console.log(gameWithNewStragety);

  for (let i = 0; i < gameWithNewStragety.length; i++) {
    gameProperties = distributePointsBasedOnGame(gameWithNewStragety[i]);
    enemyScore += gameProperties.enemyScore;
    myScore += gameProperties.myScore;
  }

  gameProperties.enemyScore = enemyScore;
  gameProperties.myScore = myScore;

  return gameProperties;
}

function distributePointsBasedOnGame(game) {
  let decisions = [
    "A X",
    "A Y",
    "A Z",
    "B X",
    "B Y",
    "B Z",
    "C X",
    "C Y",
    "C Z",
  ];
  //Rock +1, Paper +2, Scissor +3
  let enemyScoreTable = [4, 1, 7, 8, 5, 2, 3, 9, 6];
  let myScoreTable = [4, 8, 3, 1, 5, 9, 7, 2, 6];

  let decisionsIndex = decisions.indexOf(game);
  let enemyScore = enemyScoreTable[decisionsIndex];
  let myScore = myScoreTable[decisionsIndex];

  return {
    enemyScore: enemyScore,
    myScore: myScore,
  };
}

//second half of the puzzle
function applyWinStrategy(gameDecisions) {
  let newGameDecisions = [];
  let gameDecision = "";

  for (let i = 0; i < gameDecisions.length; i++) {
    gameDecision = gameDecisions[i];
    newGameDecisions[i] = chooseRockPaperScissorBasedOnEnemyInput(gameDecision);
  }

  return newGameDecisions;
}

function chooseRockPaperScissorBasedOnEnemyInput(gameDecision) {
  let newDecision = "";

  if (gameDecision.includes("X")) {
    newDecision = getLoose(gameDecision);
  } else if (gameDecision.includes("Y")) {
    newDecision = getDraw(gameDecision);
  } else if (gameDecision.includes("Z")) {
    newDecision = getWin(gameDecision);
  }

  return newDecision;
}

function getDraw(gameDecision) {
  let newGameDecision = "";
  let regEx = /[Y,Z]/g;

  if (gameDecision.includes("A")) {
    newGameDecision = gameDecision.replace(regEx, "X");
  } else if (gameDecision.includes("B")) {
    regEx = /[X,Z]/g;
    newGameDecision = gameDecision.replace(regEx, "Y");
  } else if (gameDecision.includes("C")) {
    regEx = /[X,Y]/g;
    newGameDecision = gameDecision.replace(regEx, "Z");
  }
  return newGameDecision;
}

function getLoose(gameDecision) {
  let newGameDecision = "";
  let regEx = /[X,Y]/g;

  if (gameDecision.includes("A")) {
    newGameDecision = gameDecision.replace(regEx, "Z");
  } else if (gameDecision.includes("B")) {
    regEx = /[Y,Z]/g;
    newGameDecision = gameDecision.replace(regEx, "X");
  } else if (gameDecision.includes("C")) {
    regEx = /[X,Z]/g;
    newGameDecision = gameDecision.replace(regEx, "Y");
  }
  return newGameDecision;
}

function getWin(gameDecision) {
  let newGameDecision = "";
  let regEx = /[X,Z]/g;

  if (gameDecision.includes("A")) {
    newGameDecision = gameDecision.replace(regEx, "Y");
  } else if (gameDecision.includes("B")) {
    regEx = /[X,Y]/g;
    newGameDecision = gameDecision.replace(regEx, "Z");
  } else if (gameDecision.includes("C")) {
    regEx = /[Y,Z]/g;
    newGameDecision = gameDecision.replace(regEx, "X");
  }
  return newGameDecision;
}

function hasEmptyValueOnIndex(array, number) {
  return array[number] == "";
}