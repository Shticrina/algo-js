const readlineSync = require("readline-sync");

let myarray = [11, 2, 12, 4, 6];
let min = myarray[0];
let max = 0;

for (var i = 1; i < myarray.length; i++) {
	if (myarray[i] < min) {
		min = myarray[i];
	}

	if (myarray[i] > max) {
		max = myarray[i];
	}
}

console.log("Min is: " + min);
console.log("Max is: " + max);