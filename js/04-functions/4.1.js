const readlineSync = require("readline-sync");

/**
 * Function which calculates the surface of a rectangle
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @return {number} - The surface of the rectangle
 */
function calcSurface(length, width) {
  	return length * width;
}

let user_length = Number(readlineSync.question("Please enter the length of the rectangle > "));
let user_width = Number(readlineSync.question("Please enter the width of the rectangle > "));

console.log("The surface of this rectangle is: " + calcSurface(user_length, user_width));