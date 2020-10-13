const readlineSync = require("readline-sync");

/**
 * Function that will ask the user several data about its favorite TV 
 * @return {object} tv_object - the object that gathers all the data
 */
function askTvSerie() {
	let name = readlineSync.question('Give me your name > ');
	let production_year = readlineSync.question('Give me a production year > ');

	let tv_object = {
		"serie_name": name,
		"production_year": production_year,
		"actors": getNames()
	}

	return tv_object;
}

function getNames() {
	let namesArray = [];
	let actor = "";

	do {
		actor = readlineSync.question('Give me an actor > ');

		if (actor != "") {
			let nameObject = {};
			nameObject.name = actor;
			namesArray.push(nameObject);
			// namesArray.push({ name: actor});
		}
	} while (actor != "");

	return namesArray;
}

console.log(askTvSerie());