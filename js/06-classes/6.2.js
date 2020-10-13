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

let rectangle1 = new Rectangle(3, 1, 3, 2);
let rectangle2 = new Rectangle(1, 3, 2, 2);

let rectangle22 = new Rectangle(1, 1, 2, 2);
let rectangle33 = new Rectangle(2, 2, 2, 2);

let rectangle3 = new Rectangle(5, 5, 50, 50);
let rectangle4 = new Rectangle(20, 10, 10, 10);

console.log("rectangle1 collides with rectangle2 > " + rectangle1.collides(rectangle2));
console.log("rectangle3 collides with rectangle4 > " + rectangle3.collides(rectangle4));
console.log("rectangle22 collides with rectangle33 > " + rectangle22.collides(rectangle33));