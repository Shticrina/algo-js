const readlineSync = require("readline-sync");

let myarray = [11, 2, 12, 4, 6];
let sum = 0;

for (var i = 0; i < myarray.length; i++) {
	sum += myarray[i];
}

console.log("The average value of a given array is: " + sum/myarray.length);