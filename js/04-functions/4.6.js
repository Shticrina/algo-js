const readlineSync = require("readline-sync");

/**
 * Function which returns the factorial of a number
 * @param {number} a - a number
 * @return {number} - the factorial of the number
 */
function factorial(a) {
	if (a != 0 && a != 1) {
		return a * factorial(a-1);
	} else if (a == 1) {
		return 1;
	} else {
		return 0;
	}
}

console.log(factorial(4));