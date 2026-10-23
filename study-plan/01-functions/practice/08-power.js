// Task: power(base, exponent) without the ** operator.
// Plan: start the result at 1, multiply it by base exponent times, then return it.

function power(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3)); // 8 (2 x 2 x 2)
console.log(power(3, 2)); // 9 (3 x 3)
console.log(power(5, 0)); // 1 (anything to the power of 0 is 1)
