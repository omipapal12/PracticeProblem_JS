const prompt = require('prompt-sync')();

let a = prompt('Enter First Number  = ');
let b = prompt('Enter Second Number = ');
let c = prompt('Enter Third Number = ');

let operation1 = Math.floor(a+b*c);
let operation2 = Math.floor(a%b+c);
let operation3 = Math.floor(c+a/b);
let operation4 = Math.floor(a*b/c);

console.log(" a+b*c = "+operation1);
console.log(" a%b+c = "+operation2);
console.log(" c+a/b = "+operation3);
console.log(" a*b/c = "+operation4);

if(operation1<operation2 && operation1<operation3 && operation1 <operation4)
console.log(" minimum is "+operation1);
else if(operation2<operation1 && operation2<operation3 && operation2 <operation4)
console.log(" minimum is "+operation2);
else if(operation3<operation1 && operation3<operation2 && operation3 <operation4)
console.log(" minimum is "+operation3);
else if(operation4<operation1 && operation4<operation3 && operation4 <operation3)
console.log(" minimum is "+operation4);

if(operation1>operation2 && operation1>operation3 && operation1 >operation4)
console.log(" Maximum is "+operation1);
else if(operation2>operation1 && operation2>operation3 && operation2 >operation4)
console.log(" Maximum is "+operation2);
else if(operation3>operation1 && operation3>operation2 && operation3 >operation4)
console.log(" Maximum is "+operation3);
else if(operation4>operation1 && operation4>operation3 && operation4 >operation3)
console.log(" Maximum is "+operation4);