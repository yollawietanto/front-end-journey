// Task: Build products with a constructor function and new, then print each subtotal and the grand total.

// CONSTRUCTOR FUNCTION: a template that produces product objects (a noun, so PascalCase)
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getSubtotal = function () {
        return this.price * this.quantity;
    };
}

// new creates an empty object, points this at it, runs the body, and returns the filled object
const product1 = new Product('Coffee Latte', 28000, 2);
const product2 = new Product('Croissant', 30000, 3);
const product3 = new Product('Mineral Water', 5000, 4);

console.log(`${product1.name}: ${product1.getSubtotal()}`); // Coffee Latte: price × quantity
console.log(`${product2.name}: ${product2.getSubtotal()}`); // Croissant: price × quantity
console.log(`${product3.name}: ${product3.getSubtotal()}`); // Mineral Water: price × quantity

const grandTotal = product1.getSubtotal() + product2.getSubtotal() + product3.getSubtotal();

console.log(`\nThe grand total is: ${grandTotal}`); // the three subtotals added together

// WHY new MATTERS
// Without new, Product('Coffee Latte', 28000, 2) is just a normal function call:
// - it returns undefined, because only new adds the hidden "return this"
// - this is not a new object, so the properties land on the global object,
//   or the code crashes in strict mode (TypeError: Cannot set properties of undefined)
//
// WHY PascalCase
// The capital P tells every developer "call me with new":
// a constructor produces an object (a noun), while a normal function does a task (a verb, camelCase).
