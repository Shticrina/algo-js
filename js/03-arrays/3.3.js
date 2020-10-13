const readlineSync = require("readline-sync");

let myarray = [11, 2, 12, 4, 6];
let array2 = [];

for (let elem of myarray) {
	array2.push(elem);
}

// Second way
/*for (i = 0; i < myarray.length; i++) {
  	array2[i] = array2[i];
}*/

console.log("My new copy of the given array is: ");

for (let elem of myarray) {
	console.log(elem + " ");
}