var max = 0, min=999;
for (count = 1; count <= 5; count++) {
    num = Math.floor(Math.random()* 900 +99);
    console.log("Number " + count + " is : " + num);
    if (num > max) {
        max=num;
    }
    if (num < min) {
        min = num;
    }
}
console.log("Maximum number is:= "+max);
console.log("Minimum number is:= "+min);