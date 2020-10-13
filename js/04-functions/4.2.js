const readlineSync = require("readline-sync");

/**
 * Function which returns a random integer between 1 and 10
 * @return {number} - A random integer between 1 and 10
 */
function rand10() {
  	return Math.trunc(Math.floor(Math.random() * 10) + 1);
}

console.log("My random number between 1 and 10: " + rand10());
