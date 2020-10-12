const readlineSync = require("readline-sync");

let number = 0;

do {
	number = readlineSync.question("What's your favourite number? > ");

	if (number != 42) {
		console.log("Are you sure?");
	}
} while(number != 42);