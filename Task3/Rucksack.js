const fs = require("fs");

let relativePathExampleFile = "./ThirdTaskExample.txt";
let relativePathFirstTask = "./ThirdTask.txt";

let data = fs.readFileSync(relativePathExampleFile, "utf8");
let rucksackInput = createArrayFromString(data);

console.log(rucksackInput);
printText(rucksackInput);


function printText(input){

    for(let i = 0; i < input.length; i++){
        console.log(input[i].length);
    }
}


function createArrayFromString(text) {
    return text.split(/\r?\n/);
  }

