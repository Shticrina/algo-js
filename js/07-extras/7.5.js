let myArray = [32, 4, 11, 5, 61, 354, 2, 19];

// myArray.sort(function (a, b) { return a - b; });
// console.log(myArray);

function sortArray(arr) {
	let sortedArray = [arr[0]];
	// let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		for (let j = i+1; j < sortedArray.length; j++) {
			if (arr[j] < arr[i]) {
				sortedArray[i] = arr[j];
				// min = arr[i];
			}
		// }
	}

	return arr;
	// return sortedArray;
}

console.log(sortArray(myArray));