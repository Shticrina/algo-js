const readlineSync = require("readline-sync");

let user_input = parseInt(readlineSync.question("Please give a number > "));
let result = [];

function fibonacci(nb) {
	if (nb == 0) {
		result.push(0);
	} else if (nb == 1) {
		result.push(0, 1);
	} else {
		result = fibonacci(nb-1);
	    result.push(result[result.length-1] + result[result.length-2]);
	}

	return result;
}

console.log(fibonacci(user_input));
// ex: 5 = [0, 1, 1, 2, 3, 5]
// ex: 8 = [0, 1, 1, 2, 3, 5, 8, 13, 21]