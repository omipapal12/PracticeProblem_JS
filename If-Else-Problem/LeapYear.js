const prompt = require('prompt-sync')();

let year = prompt('Enter year ');
year = Number(year);

console.log("Entered year is :" +year)
if((year%4 == 0 && year%100 != 0) || (year%400 == 0))
{
    console.log("Year Is A Leap Year");
}
else{
    console.log("Year Is Not A Leap Year");
}