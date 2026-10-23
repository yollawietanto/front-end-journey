// Task: write triple and sumEvenTo in every possible function form, each with its own name.

// FUNCTION DECLARATION
function tripleDeclaration(n) {
    return n * 3;
}

function sumEvenToDeclaration(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
}

// FUNCTION EXPRESSION
const tripleExpression = function (n) {
    return n * 3;
};

const sumEvenToExpression = function (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
};

// ARROW FUNCTION, BLOCK BODY { }
const tripleArrowBlock = (n) => {
    return n * 3;
};

const sumEvenToArrowBlock = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
};

// ARROW FUNCTION, CONCISE BODY (no { })
const tripleArrowConcise = (n) => n * 3;

// sumEvenToArrowConcise: not possible. A concise body takes only ONE expression.
// let and for are statements, so they need a block body { } with return.

console.log('tripleDeclaration:', tripleDeclaration(2)); // 6
console.log('tripleExpression:', tripleExpression(2)); // 6
console.log('tripleArrowBlock:', tripleArrowBlock(2)); // 6
console.log('tripleArrowConcise:', tripleArrowConcise(2)); // 6
console.log();
console.log('sumEvenToDeclaration:', sumEvenToDeclaration(6)); // 12
console.log('sumEvenToExpression:', sumEvenToExpression(6)); // 12
console.log('sumEvenToArrowBlock:', sumEvenToArrowBlock(6)); // 12
