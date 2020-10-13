const readlineSync = require("readline-sync");

let nb = Number(readlineSync.question("Give me a positive integer > "));

if (nb > 0 && typeof nb == "number") {
	let divisors = [];

	for (let i = 2; i < nb; i++) {
		if (nb % i == 0) {
	        divisors.push(i);
	    }
	}

	console.log(divisors);
} else {
	console.log("Sorry! Not a positive integer.");
}