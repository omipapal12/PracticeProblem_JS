const readline = require("prompt-sync");
const prompt=readline();

//taking input  from user
let number = prompt('Enter the value of n: ');
let sum = 0;

for(i=1; i <= number; i++){
    sum=sum+(1/i);
}
 console.log("Harmonic value for the entered value is: " + sum)
