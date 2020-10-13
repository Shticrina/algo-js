const readlineSync = require("readline-sync");

/**
 * Function which returns a random integer between 1 and 10
 * @return {number} - A random number between 1 and 10
 */
function rand10() {
  	return Math.trunc(Math.floor(Math.random() * 10) + 1);
}

/**
 * Function which uses "rand10() function" creating an array of n numbers between 1 and 10
 * @param {number} n - The number of array elements
 * @return {array} random_array - an array of n numbers between 1 and 10
 */
function multiRand(n) {
	let random_array  = [];

	for (var i = 0; i < n; i++) {
		let random_nb = rand10();
		random_array.push(rand10());
	}

	return random_array;
}

let user_random = Number(readlineSync.question("Please give me a number > "));

console.log(multiRand(user_random));