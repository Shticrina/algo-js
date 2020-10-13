const readlineSync = require("readline-sync");

/**
 * Function which returns the factorial of a number
 * @param {array} arr - array of numbers
 * @return {number} - A random number between 1 and 10
 */
function factorial(a) {
	if (a != 0 && a != 1) {
		return a*factorial(a-1);
	} else if (a == 1) {
		return 1;
	} else {
		return 0;
	}
}

console.log(factorial(4));