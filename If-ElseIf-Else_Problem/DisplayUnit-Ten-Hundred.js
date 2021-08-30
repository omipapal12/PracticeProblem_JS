const prompt = require('prompt-sync')();

let Num = prompt('Enter Number To Dispaly Its Property ');
Num = Number(Num);

console.log("Enter The Number: "+Num)

if(Num == 1){
    console.log("Its One")
}
else if(Num == 10){
    console.log("Its Ten")
}
else if(Num == 100){
    console.log("Its Hundread")
}
else if(Num == 1000){
    console.log("Its Thouand")
}
else{
    console.log("Wrong Number")
}
