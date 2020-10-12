const readlineSync = require("readline-sync");

/*Ask to the user its shoe size and its birth year. Then make the following calculation:

Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766*/

let shoe_size = readlineSync.question('Can you give me your shoe size please? > ');
let birth_year = readlineSync.question('Can you give me your birth year please? > ');

let result = (shoe_size*2 + 5) * 50 - Math.trunc(birth_year) + 1766;

console.log("The final result is: " + result);