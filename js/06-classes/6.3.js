class Rectangle {

	constructor(topLeftXPos, topLeftYPos, width, length) {
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.length = length;
	}

	collides(otherRectangle) {
		if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
			this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
			this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
			this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
			return true;
		}

		return false;
	}
}

/**
 * Function which returns a random number between 1 and n
 * @param {number} n - max number for the random
 * @return {number} - the random number between 1 and n
 */
function rand(n) {
  	return Math.trunc(Math.floor(Math.random() * n) + 1);
}

let rectangles = [];

for (let i = 1; i <= 130; i++) {
	let rectangle = new Rectangle(rand(100), rand(100), rand(100), rand(100));
	rectangles.push(rectangle);
}

for (let i = 0; i < rectangles.length-1; i++) {
	for (let j = i+1; j < rectangles.length; j++) {
		console.log("rectangle" + (i+1) + " collides with rectangle" + (j+1) + " > " + rectangles[i].collides(rectangles[j]));
	}
}