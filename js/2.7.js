const readlineSync = require("readline-sync");

let n = Number(readlineSync.question("Please give me a number? > "));
let sum = 0;
let counter = 0;

while(counter <= n) {
	n = Number(readlineSync.question("Please give me a number? > "));
	sum += n;
	counter++;
}

console.log("the sum of all numbers is: " + sum);