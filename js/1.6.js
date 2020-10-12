const readlineSync = require("readline-sync");

let nb1 = readlineSync.question('Can you give me a number please? > ');
let nb2 = readlineSync.question('Can you give me another number please? > ');

let modulo = nb1%nb2;

console.log("The rest of the integer division of the two numbers is: " + Math.trunc(modulo));