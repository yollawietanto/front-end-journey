// Task: print a receipt (subtotal, 11% VAT, total) with three producers and one performer.

const TAX_RATE = 0.11; // 11% VAT

function calculateSubtotal(price, quantity) {
    return price * quantity;
}

function calculateTax(subtotal) {
    return subtotal * TAX_RATE;
}

function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}

function logReceipt(price, quantity) {
    const subtotal = calculateSubtotal(price, quantity);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);
    console.log(`Subtotal: ${subtotal}\nVAT (11%): ${tax}\nTotal: ${total}`);
}

logReceipt(50000, 3);
// Subtotal: 150000
// VAT (11%): 16500
// Total: 166500
