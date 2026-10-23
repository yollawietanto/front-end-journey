// Task: sumEvenTo(n) adds up the even numbers from 1 to n.
// Plan: for every number from 1 to n, if it is even, add it to the total; when done, return the total.

// Option 1: check every number with if
function sumEvenToWithIf(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            // even: no remainder when divided by 2
            total += i;
        }
    }
    return total;
}

// Option 2: start at 2 and step by 2, so only even numbers are visited
function sumEvenToStepTwo(n) {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
        total += i;
    }
    return total;
}

console.log(sumEvenToWithIf(6)); // 12
console.log(sumEvenToStepTwo(6)); // 12
