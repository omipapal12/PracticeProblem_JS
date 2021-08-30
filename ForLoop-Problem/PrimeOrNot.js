const readline = require("prompt-sync");
const prompt=readline();

let num = prompt("Enter number to check it is  prime number or not : ");
let i;
for(i=2; i<num; i++){
    if(num % i == 0){
        console.log(num  + " is Not a Prime Number");
        break;
    }
}
if(i==num){
    console.log(num +" is Prime Number");
}