const readlineSync = require("readline-sync");

let lastName = readlineSync.question('Can you give me your last name please? > ');
let firstName = readlineSync.question('Can you give me your first name please? > ');
let city = readlineSync.question('Can you tell me where do you live please? > ');

console.log('Your name is ' + firstName + ' ' + lastName + ' and you live in '+ city +'.');