// Task: Return a stock label with a chained ternary, and refactor a smelly ternary.

// A. CREATE A PRODUCER FUNCTION

const LOW_STOCK_LIMIT = 5;

function getStockLabel(stock) {
    return stock === 0 ? 'Out of stock' : stock <= LOW_STOCK_LIMIT ? 'Low stock' : 'In stock';
}

console.log(getStockLabel(0)); // Out of stock
console.log(getStockLabel(3)); // Low stock
console.log(getStockLabel(5)); // Low stock
console.log(getStockLabel(12)); // In stock

// B. FIX THE SMELL CODE

// stock > 0 ? console.log('Available') : console.log('Sold out'); --> this is the smell code

// Fix:
function getAvailability(stock) {
    return stock > 0 ? 'Available' : 'Sold out';
}

console.log();
console.log(getAvailability(7)); // Available
console.log(getAvailability(0)); // Sold out
