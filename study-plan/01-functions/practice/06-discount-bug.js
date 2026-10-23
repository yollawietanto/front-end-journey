// Task (bug hunt): the final price printed NaN. Find the bug and fix it.
// actual (before fix): 10000, then Final price: NaN
// why: calculateDiscount used console.log instead of return, so it handed back undefined; 100000 - undefined is NaN
// fix: return the discount

const DISCOUNT_RATE = 0.1;

function calculateDiscount(price) {
    // console.log(price * DISCOUNT_RATE); -> this is wrong, should have been return, not console.log
    return price * DISCOUNT_RATE;
}

function logFinalPrice(price) {
    const discount = calculateDiscount(price);
    console.log(`Final price: ${price - discount}`);
}

logFinalPrice(100000); // Final price: 90000
