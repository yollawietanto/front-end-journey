// Task: Give circle objects a getArea method that uses this, and share one method between two circles.

// A. CREATE OBJECT CIRCLE WITH METHOD

const circle = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
};

console.log(circle.getArea().toFixed(2)); // runs the circle formula
console.log(circle.getArea); // gives the value of getArea

// the difference with () vs without (): with () you run the function and without () you get the value of getArea property, which is the function itself.

// B. CREATE FUNCTION EXPRESSION

const calculateCircleArea = function () {
    return Math.PI * this.radius ** 2;
};

const smallCircle = {
    radius: 2,
    calculateCircleArea,
};

const bigCircle = {
    radius: 10,
    calculateCircleArea,
};

console.log(smallCircle.calculateCircleArea().toFixed(2)); // area of small circle, 2 decimals
console.log(bigCircle.calculateCircleArea().toFixed(2)); // area of big circle, 2 decimals
