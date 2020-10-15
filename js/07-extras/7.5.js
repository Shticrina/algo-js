let myArray = [32, 4, 11, 5, 4, 61, 354, 2, 19];

// **************************** Case 1 ****************************
// myArray.sort(function (a, b) { return a - b; });
// console.log(myArray);

/**
 * Function that takes an array of numbers as argument and returns the minimum of the values
 * @param {array} arr - array of numbers
 * @return {number} min - the minimum of array's values
 */
function min(arr) {
	let min = arr[0];

	if (Array.isArray(arr)) {
		for (var i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}

		return min;
	}
}

// ************************** Case 2 ****************************
// take the min element; add it to sorted array; remove this element from the array
// do the same thing for the rest of the elements, until you move all the elements in the sorted array
function sortArray2(arr) {
	let sortedArray = [];
	
	while (arr.length > 0) {
		let min_value = min(arr);
		let min_position = arr.indexOf(min_value);

		sortedArray.push(min_value);
		arr.splice(min_position, 1);

		/*console.log(arr);
		console.log(sortedArray);
		console.log("--------------------");*/
	}

	return sortedArray;
}

// console.log(sortArray2(myArray));

// ************************** Case 3 **************************
// Compare each 2 elements from the array and put the min in front of the other element (bubbles method)
function sortArray3(arr) {
	/*for (let i = 0; i < arr.length-1; i++) {		
		for (j = 0; j < arr.length-i; j++){
			if (arr[j+1] < arr[j]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}*/

	let n = arr.length-1;

	while(n > 1) {
		for (let i = 0; i < n; i++) {		
			if (arr[i+1] < arr[i]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}

		n--;
	}

	return arr;
}

let array3 = [32, 4, 11, 5, 2, 61, 354, 2, 19];
console.log(sortArray3(array3));