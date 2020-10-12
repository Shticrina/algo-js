const readlineSync = require("readline-sync");

let number = Number(readlineSync.question("Please enter a number between 1 and 7 > "));

if (number >= 1 && number <= 7) {
	if (number == 1) {
		console.log("Monday");
	} else if (number == 2) {
		console.log("Tuesday");
	} else if (number == 3) {
		console.log("Wednesday");
	} else if (number == 4) {
		console.log("Thursday");
	} else if (number == 5) {
		console.log("Friday");
	} else if (number == 6) {
		console.log("Satyrday");
	} else {
		console.log("Sunday");
	}
} else {
	console.log("Not a number between 1 and 7!");
}