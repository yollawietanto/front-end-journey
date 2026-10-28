// Task: Find why the final price prints NaN and fix it.

// BEFORE (broken code, kept as a comment to show the bug)
// const DISCOUNT_RATE = 0.1;
//
// function calculateDiscount(price) {
//     console.log(price * DISCOUNT_RATE); // ← the bug: prints the discount instead of returning it
// }
//
// function logFinalPrice(price) {
//     const discount = calculateDiscount(price);
//     console.log(`Final price: ${price - discount}`);
// }
//
// logFinalPrice(100000);

// BUG
// actual (before fix): 10000, then Final price: NaN
// why: calculateDiscount printed the discount but handed back undefined,
//      so discount was undefined, and 100000 - undefined is NaN
// fix: return the discount instead of printing it

// AFTER (fixed code)
const DISCOUNT_RATE = 0.1;

// PRODUCER: returns the discount for a price
function calculateDiscount(price) {
    return price * DISCOUNT_RATE;
}

// PERFORMER: prints the price after the discount
function logFinalPrice(price) {
    const discount = calculateDiscount(price);
    console.log(`Final price: ${price - discount}`);
}

logFinalPrice(100000); // Final price: 90000: the discount now comes back to logFinalPrice instead of only being printed
