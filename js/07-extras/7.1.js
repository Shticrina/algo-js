const readlineSync = require("readline-sync");

let random_nb = Math.trunc(Math.floor(Math.random() * 100) + 1);
let user_input = "";

do {
	user_input = Number(readlineSync.question("Guess the number between 1 and 100 > "));

	if (user_input < random_nb) {
		console.log("Too low!");
	} else if (user_input > random_nb) {
		console.log("Too high!");
	}
} while(user_input != random_nb);

console.log("Well guessed!");