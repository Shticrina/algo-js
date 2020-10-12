const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a decimal number please (ex: 13.45)? > ');
let number2 = readlineSync.question('Can you give me another decimal number please? > ');

let number1IntegerPart = Math.trunc(number1);
let result2 = number1IntegerPart * number2;
// let result2 = Number(number1IntegerPart) + Number(number2);

console.log("The result is: " + result2);