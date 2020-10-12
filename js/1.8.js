const readlineSync = require("readline-sync");

let nb_questions = 6;

let lastName = readlineSync.question('Can you give me your last name please? > ');
nb_questions--;
console.log("You have " + nb_questions + " questions left");

let firstName = readlineSync.question('Can you give me your first name please? > ');
nb_questions--;
console.log("You have " + nb_questions + " questions left");

let city = readlineSync.question('Can you tell me where do you live please? > ');
nb_questions--;
console.log("You have " + nb_questions + " questions left");

let shoe_size = readlineSync.question('Can you give me your shoe size please? > ');
nb_questions--;
console.log("You have " + nb_questions + " questions left");

let birth_year = readlineSync.question('Can you give me your birth year please? > ');
nb_questions--;
console.log("You have " + nb_questions + " questions left");

let animal = readlineSync.question('Can you tell me which is your favourite animal? > ');

console.log("You are " + firstName + " " + lastName + ", a " + animal + 
	" in danger of extinction, which lives in " + city + ", have " + shoe_size + "cm paws and will live till "
	+ (Number(birth_year) + 100) + "...");