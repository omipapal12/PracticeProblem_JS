function convertToFahrenheit(celsius){
    // calculating fahrenheit
    const degreeFahrenheit = (celsius * 1.8) + 32
    // displaying the result
    console.log(celsius +" degree celsius is equal to"+ degreeFahrenheit.toFixed(2)+" degree fahrenheit.");
}
//function to convert fahrenheit to celcius
function convertToCelcius(fahrenheit){
    // calculating fahrenheit
    const degreeCelsius = (fahrenheit-32)*0.5556;
    // displaying the result
    console.log(fahrenheit +"degree celsius is equal to"+ degreeCelsius.toFixed(2)+ "degree fahrenheit");

}
const prompt = require ('prompt-sync')();
console.log("1]Celsius To Fahrenheit\n 2]Fahrenheit To Celcius");
const choice = parseInt(prompt("Enter your choice :- "));
switch(choice) {
    case 1: //  taking input (celsius value) from user 
            const celsius = prompt("Enter a celsius value : ");
            convertToFahrenheit(celsius);
            break;
    case 2: // taking input (fahrenheit value) from user
            const fahrenheit = prompt("Enter a fahrenheit value : ");
            convertToCelcius(fahrenheit);
            break;
    default: console.log("Invalid Input"); 
}