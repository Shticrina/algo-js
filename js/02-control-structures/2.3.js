const readlineSync = require("readline-sync");

/*for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

for (let i = 0; i < 50; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}*/

let i = 1;

while (i <= 100) {
  	if (i % 2 == 0) {
		console.log(i);
	}
	
  	i += 1;
}