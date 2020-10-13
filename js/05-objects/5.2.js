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
		}
	} while (actor != "");

	return namesArray;
}

function randomizeCast(tvSerie) {
	for(let i = tvSerie.actors.length-1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = tvSerie.actors[i];

		tvSerie.actors[i] = tvSerie.actors[j];
		tvSerie.actors[j] = temp;
	}

	return tvSerie;
}

console.log(randomizeCast(askTvSerie()));
