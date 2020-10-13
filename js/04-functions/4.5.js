const readlineSync = require("readline-sync");

/**
 * Function which returns a random integer between 1 and 10
 * @param {array} arr - array of numbers
 * @return {number} - A random number between 1 and 10
 */
function calcDistance( x1, y1, x2, y2) {
	let distance = 0;
	let xs = x2 - x1;
	let ys = y2 - y1;
	
	xs *= xs;
	ys *= ys;
	 
	distance = Math.sqrt(xs + ys);

  	return distance;
}

console.log(calcDistance(1, 1, 2, 2));
console.log(calcDistance(-2, 2, 2, -2));