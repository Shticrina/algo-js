const readlineSync = require("readline-sync");

let lastName = readlineSync.question('Can you give me your last name please? > ');
let firstName = readlineSync.question('Can you give me your first name please? > ');
let city = readlineSync.question('Can you tell me where do you live please? > ');
let shoe_size = readlineSync.question('Can you give me your shoe size please? > ');
let birth_year = readlineSync.question('Can you give me your birth year please? > ');
let animal = readlineSync.question('Can you tell me which is your favourite animal? > ');

console.log("You are " + firstName + " " + lastName + ", a " + animal + 
	" in danger of extinction, which lives in " + city + ", have " + shoe_size + "cm paws and you will live till "
	+ (Number(birth_year) + 100) + "...");