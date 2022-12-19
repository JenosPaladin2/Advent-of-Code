const fs = require("fs");

let relativePathExampleFile = "./SecondTaskExample.txt";
let relativePathFirstTask = "./SecondTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");

let rockPaperScissorInput = createArrayFromString(data);

console.log(rockPaperScissorInput);

processRockPaperScissorInput();

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

  function processRockPaperScissorInput(){
    var oponentOptions = ['A', 'B', 'C']; //Rock, Paper, Scissor
    var myOptions =['X', 'Y', 'Z']; //Rock, Paper, Scissor
    var table;

    for(let i=0; i< table.length; i++){
      console.log(table);
    }
    //Rock wins Scissors, Loose against Paper
    //Paper wins Rock, Loose against Scissors
    //Scissor wins Paper, Loose against Rock
    //Same entry ends in nothing
    //Win +6
    //Loose +0
    //Draw +3
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
  