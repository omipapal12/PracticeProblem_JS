const readline = require("prompt-sync");
const prompt=readline();
  
// taking input from user
const num = prompt('Enter a number like 1, 10, 100, 1000, 10000,...... ');
 
switch(Number(num)) {
    case 1:
       console.log("Units");
       break;
    case 10:
       console.log("Tens");
        break;
    case 100:
       console.log("Hundred");
         break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("TenThousands");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("TenLakhs");
        break;
    case 100000000:
        console.log("Crore");
        break;
     default:
         console.log("Wrong input!");
         break;
 }