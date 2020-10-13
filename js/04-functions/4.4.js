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

/**
 * Function that takes an array of numbers as argument and returns the average of the values
 * @param {array} arr - array of numbers
 * @return {number} average - the average of array's values
 */
function average(arr) {
	let sum = 0;
	let average = 0;

	if (!Array.isArray(arr)) {
		console.log("The parameter in 'average(param)' has to be an array!");
		return;
	}

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	average = sum / arr.length;

	return average;
}

/**
 * Function that takes an array of numbers as argument and returns the minimum of the values
 * @param {array} arr - array of numbers
 * @return {number} min - the minimum of array's values
 */
function min(arr) {
	let min = arr[0];

	if (!Array.isArray(arr)) {
		console.log("The parameter in 'average(param)' has to be an array!");
		return;
	}

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return min;
}

/**
 * Function that takes an array of numbers as argument and returns the maximum of the values
 * @param {array} arr - array of numbers
 * @return {number} max - the maximum of array's values
 */
function max(arr) {
	let max = arr[0];

	if (!Array.isArray(arr)) {
		console.log("The parameter in 'average(param)' has to be an array!");
		return;
	}

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

let user_random = Number(readlineSync.question("Please give me a number > "));
let table = multiRand(user_random);

console.log(table);
console.log("The average is: " + average(table));
console.log("The min is: " + min(table));
console.log("The max is: " + max(table));