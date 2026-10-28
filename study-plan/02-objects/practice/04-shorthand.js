// Task: Build an object with shorthand properties and show that changing a property does not change the original variable.

const name = 'Coffee Latte';
const price = 28000;
const stock = 12;

const product = {
    name,
    price,
    stock,
};

console.log(product.name); // Coffee Latte
console.log(product.price); // 28000
console.log(product.stock); // 12

product.price = 30000;

console.log(product.price); // 30000
console.log(price); // 28000

// Why different: { price } copied the number 28000 into the product's drawer.
// product.price and the variable price are two separate places,
// so changing the drawer does not change the variable.
