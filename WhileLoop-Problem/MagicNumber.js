const readline = require("prompt-sync");
 const prompt=readline();
 
// taking input from the user
const userInput= parseInt(prompt("Think of a number between 1 to 100 : "));

//declaring the  variables
let first=0;
let last=100;
answer=parseInt((first+last)/2);

while ( first < last ) {
	console.log("Is your number = "+answer);
    console.log("1.Enter 'y' if my guess is correct");
    console.log("2.Enter '1' to indicate that my guess is too high");
    console.log("3.Enter '0' to indicate that my guess is too low");
    let checkAnswer = prompt("Enter your choice :- ");
    if (checkAnswer === "1"){
        last = answer;
        answer = parseInt((first+last)/2);
    }
    else if (checkAnswer == "0"){
        first = answer;
        answer = parseInt((first+last)/2);
    }
    else if ( (checkAnswer === "y") && (userInput === answer)) {
        console.log(" Your Number Was :- "+answer);
        return;
    }
    else{
        console.log("I do not understand ");
    }
}