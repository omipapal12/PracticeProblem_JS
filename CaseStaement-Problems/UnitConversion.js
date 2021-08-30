const readline = require("prompt-sync");
const prompt=readline();

//displaying the options to user to perform any operation 
const display= prompt('Enter 1. Feet to Inch ' +
                            '2. Feet to Meter ' +
                            '3. Inch to Feet ' +
                            '4. Meter to Feet option: ')                           
 
//we take number from user to  convert                                
const num = prompt("Enter the number for the unit conversion: ");  

switch(Number(display)) {
    case 1: 
        let feet_to_inch = Number(num) * 12;
        console.log("Feet to Inch: " +feet_to_inch);
        break;
    case 2: 
         let feet_to_meter = Number(num) / 3.281;
         console.log("Feet to Meter: " +feet_to_meter);
         break;
     case 3: 
        let inch_to_feet = Number(num) / 12;
        console.log("Inch to Feet: " +inch_to_feet);
        break;
    case 4: 
        let meter_to_feet = Number(num) * 3.281;
        console.log("Meter to Feet: " +meter_to_feet);
        break;
    default:
        console.log("invalid option");
        break;
}                 