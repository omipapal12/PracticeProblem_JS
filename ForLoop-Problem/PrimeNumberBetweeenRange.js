const readline = require("prompt-sync");
const prompt=readline();

//taking input from user 
let lowerNumber = prompt('Enter lower number: ')
let higherNumber = prompt('Enter higher number: ')

console.log("The prime numbers between"+lowerNumber +"and"+ higherNumber+" are: ")
 
// looping from lowerNumber to higherNumber
 for (let i = lowerNumber; i <= higherNumber; i++) {
     let flag = 0;
 
     // looping through 2 to user input number
     for (let j = 2; j < i; j++) {
         //if the remainder is 0 then it is not prime number
         if (i % j == 0) {
             flag = 1;
             break;
         }
     }
    // if number greater than 1 and not divisible by other numbers
     if (i > 1 && flag == 0) {
         console.log(i);
     }
 }