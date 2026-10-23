// Task: a producer that calculates a rectangle's area, and a performer that prints it.

function calculateRectangleArea(width, height) {
    return width * height;
}

function logRectangleArea(width, height) {
    const area = calculateRectangleArea(width, height);
    console.log(`The area of a ${width} x ${height} rectangle is ${area}`);
}

logRectangleArea(5, 3); // The area of a 5 x 3 rectangle is 15
logRectangleArea(10, 4); // The area of a 10 x 4 rectangle is 40
