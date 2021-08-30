const prompt = require('prompt-sync')();

let a = prompt('Enter Number To Dispaly Days ');
a = Number(a);

console.log("Entered Day is :" +a)

if (a == 1){
    console.log("Its Sunday")
}
else if (a == 2){
    console.log("Its Monday")
}
else if(a == 3){
    console.log("Its Tuesday")
}
else if (a == 4){
    console.log("Its Wednesday")
}
else if (a == 5){
    console.log("Its Thursday")
}
else if (a == 6){
    console.log("Its Friday")
}
else if (a == 7){
    console.log("Its Saturday")
}
else{
    console.log("Day does not occur")
}