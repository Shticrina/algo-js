const readlineSync = require("readline-sync");

let pizza_flavours = [];
let action_nb = "";
let showMenu = false;

do {
	console.log("\nHello! Welcome to the Pizza Flavors Manager.");
	console.log("\nPlease choose your actions:");
	console.log("  1 - List all the pizza flavors");
	console.log("  2 - Add a new pizza flavor");
	console.log("  3 - Remove a pizza flavor");
	console.log("  4 - Exit this program");

	do {
		action_nb = Number(readlineSync.question("\nEnter your action's number: "));

		if (!Number.isInteger(action_nb) || action_nb < 1 || action_nb > 4) {
			console.log("Your input is not a number between 1 and 4! Please try again.");
		}
	} while(!Number.isInteger(action_nb) || action_nb < 1 || action_nb > 4);

	switch (action_nb) {
		case 1:
			if (pizza_flavours.length > 0) {
				console.log("\nHere is the list of flavours:\n");

				for (var i = 0; i < pizza_flavours.length; i++) {
					console.log("   " + (i+1) + " - " + pizza_flavours[i]);
				}
			} else {
				console.log("\nThere is not yet pizza flavours in the list. Please be the first to add one.");
			}

			showMenu = true;
			break;
		case 2:
			let flavourToAdd = readlineSync.question("\nPlease enter a flavour: ");

			pizza_flavours.push(flavourToAdd);
			showMenu = true;
			break;
		case 3:
			let flavour_nb = "";

			do {
				flavour_nb = Number(readlineSync.question("\nPlease enter the flavour number to remove: "));

				if (!Number.isInteger(flavour_nb) || flavour_nb < 1 || flavour_nb > pizza_flavours.length) {
					console.log("This number does not exists in the flavours list!");
				}
			} while(!Number.isInteger(action_nb) || flavour_nb < 1 || flavour_nb > pizza_flavours.length);

			pizza_flavours.splice(flavour_nb-1, 1);
			break;
		default:
			showMenu = false;
	}
} while(showMenu);
