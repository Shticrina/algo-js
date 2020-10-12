const readlineSync = require("readline-sync");

let myarray = [11, 2, 32, 4, 5];
let sum = 0;

for (var i = 0; i < myarray.length; i++) {
	sum += myarray[i];
}

console.log("The sum of all the elements in you array is: " + sum);