// Task: a producer that calculates a circle's area, and a performer that prints it.

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

function logCircleArea(radius) {
    const area = calculateCircleArea(radius);
    console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
}

logCircleArea(7); // The area of a circle with radius 7 is 153.94
