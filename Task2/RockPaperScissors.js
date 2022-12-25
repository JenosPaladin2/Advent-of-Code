const fs = require("fs");

let relativePathExampleFile = "./SecondTaskExample.txt";
let relativePathFirstTask = "./SecondTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");
let rockPaperScissorInput = createArrayFromString(data);

//console.log(rockPaperScissorInput);

let result = processRockPaperScissorInput(rockPaperScissorInput);

console.log('Enemy score: '+result.enemyScore);
console.log('My score: '+ result.myScore);

/*
Vorüberlegung:
1. Input soll getrennt werden nach Zeilenumbrüchen
2. Input soll getrennt werden nach Leerzeichen und in zwei Arrays gepackt werden
3. Array 1 kopieren, kopierte Array soll folgende Ersetzung stattfinden:
A = 1, B = 2, C=3 UND dann per Schleife die Summe bilden
4. Array 2 kopieren, kopierte Array soll folgende Ersetzung stattfinden:
X = 1, Y = 2, Z=3 UND dann per Schleife die Summe bilden
5. Array1 mit Array2 vergleichen. Wenn linke Seite gewinnt, bei linke Seite dazuaddieren
Wenn rechte Seite gewinnt, dann bei rechten Seite dazuaddieren.
*/


function createArrayFromString(text) {
    return text.split(/\r?\n/);
  }

  function processRockPaperScissorInput(table){
    
    let gameProperties = {
      enemyScore: 0,
      myScore: 0,
    }

    let enemyScore = 0;
    let myScore = 0;

    let gameWithNewStragety = applyWinStrategy(table);

    for(let i=0; i< gameWithNewStragety.length; i++){
      gameProperties = distributePointsBasedOnGame(gameWithNewStragety[i]);
      enemyScore += gameProperties.enemyScore;
      myScore += gameProperties.myScore;
    }

    gameProperties.enemyScore = enemyScore;
    gameProperties.myScore = myScore;

    return gameProperties;
  }

  function distributePointsBasedOnGame(game){
    let decisions = ['A X', 'A Y', 'A Z', 'B X', 'B Y', 'B Z', 'C X', 'C Y', 'C Z'];
    //Rock +1, Paper +2, Scissor +3
    let enemyScoreTable = [4,1,7,8,5,2,3,9,6];
    let myScoreTable = [4,8,3,1,5,9,7,2,6];

    let decisionsIndex = decisions.indexOf(game);
    let enemyScore = enemyScoreTable[decisionsIndex];
    let myScore = myScoreTable[decisionsIndex];

    return {
      enemyScore: enemyScore,
      myScore: myScore
    }
  }

  //second half of the puzzle
  function applyWinStrategy(gameDecisions){
    let newGameDecisions = [];
    let gameDecision = "";

    for(let i = 0; i < gameDecisions.length; i++){
      gameDecision = gameDecisions[i];
      newGameDecisions[i] = chooseRockPaperScissorBasedOnEnemyInput(gameDecision);
    }

    return newGameDecisions;
  }

function chooseRockPaperScissorBasedOnEnemyInput(gameDecision){
  let newDecision = "";

  if(gameDecision.includes('A')){
    newDecision = chooseRockOnEnemyRock(gameDecision);
  }else if(gameDecision.includes('B')){
    newDecision = choosePaperOnEnemyPaper(gameDecision);
  }else if(gameDecision.includes('C')){
    newDecision = chooseRockOnEnemyScissor(gameDecision);
  }

  return newDecision;
}

function chooseRockOnEnemyRock(gameDecision){
  let regEx = /[Y,Z]/g
    return gameDecision.replace(regEx,"X");
}

function choosePaperOnEnemyPaper(gameDecision){
  let regEx = /[X,Z]/g
    return gameDecision.replace(regEx,"Y");
}

function chooseRockOnEnemyScissor(gameDecision){
  let regEx = /[Y,Z]/g
    return gameDecision.replace(regEx,"X");
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
  