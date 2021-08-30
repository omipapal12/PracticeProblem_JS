const readline = require("prompt-sync");
 const prompt=readline();

 function checkPalindrome(userInput) {

    let number = userInput;
    let reverse = 0;
    let remainder = 0;
    while ( number != 0){
        remainder = number % 10;
        reverse = (reverse*10) + remainder ;
        number = parseInt(number/10);
    }
    if( userInput == reverse)
        console.log(userInput + " is Palindrome");
    else
        console.log(userInput+" is Not Palindrome");      
}


let userInput1 = parseInt(prompt("Enter a number to check wheather it is palindrome or not: "));
checkPalindrome(userInput1);