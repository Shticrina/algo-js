const readlineSync = require("readline-sync");

let min = Number(readlineSync.question('Give min number > '));
let max = Number(readlineSync.question('Give max number > '));
let current = Number(readlineSync.question('Give current number > '));

if (current >= min && current <= max) {
  	console.log("Congratulations! The current number is between min and max.");
} else {
  	console.log("Your number has to be greather than " + min + " and smaller than " + max + "!");
  	return;
}
