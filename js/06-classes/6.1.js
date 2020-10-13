class Circle {

	constructor(xPos, yPos, radius) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.radius = radius;
	}

	move(xOffset, yOffset) {
		this.xPos += xOffset;
		this.yPos += yOffset;
	}

	get surface() {
		return Math.PI*Math.pow(this.radius, 2);
	}
}

let circle1 = new Circle(12, 22, 5);
console.log(circle1);

circle1.xPos = 8;
circle1.yPos = 20;
circle1.radius = 3;
console.log(circle1);

circle1.move(5, 5); // 13, 25
console.log(circle1);
console.log("The surface is: " + circle1.surface);