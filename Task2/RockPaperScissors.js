const fs = require("fs");

let relativePathExampleFile = "./AdventOfCodeExample.txt";
let relativePathFirstTask = "./SecondTask.txt";

let data = fs.readFileSync(relativePathFirstTask, "utf8");

let rockPaperScissorInput = createArrayFromString(data);

console.log(rockPaperScissorInput);






function createArrayFromString(text) {
    return text.split(/\r?\n/);
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
  