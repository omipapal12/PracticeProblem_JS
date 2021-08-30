const readline = require("prompt-sync");
const prompt=readline();

const num = prompt("Enter a range to get power of two: ")

for(i = 0; i <= num; i++) { 
    console.log(Math.pow(2, i))
}