// Task: Find and fix four common function bugs. Each bug shows the broken code, what it did, why, and the fix.

// ==================== BUG A: block body without return ====================

// BEFORE (broken code, kept as a comment to show the bug)
// const double = (n) => {
//     n * 2; // ← the bug: the value is calculated but never returned
// };
// console.log('Bug A:', double(4));

// BUG
// actual (before fix): Bug A: undefined
// why: with { }, return must be written; without it the function hands back undefined
// fix: concise body (no { }), so the result is returned automatically

// AFTER (fixed code)
const double = (n) => n * 2;
console.log('Bug A:', double(4)); // Bug A: 8: the concise body returns n * 2

// ==================== BUG B: void function used as if it returned a value ====================

// BEFORE (broken code, kept as a comment to show the bug)
// function logSquare(n) {
//     console.log(n * n); // ← the bug: prints the square instead of returning it
// }
// const result = logSquare(3) + 1;
// console.log('Bug B:', result);

// BUG
// actual (before fix): 9, then Bug B: NaN
// why: logSquare printed 9 but handed back undefined, and undefined + 1 is NaN
// fix: return instead of console.log, and rename log... to calculate... (producer, not performer)
//      the + 1 stays: it is what the caller needs

// AFTER (fixed code)
function calculateSquare(n) {
    return n * n;
}
const result = calculateSquare(3) + 1;
console.log('Bug B:', result); // Bug B: 10: the square comes back as a number, then + 1 is added

// ==================== BUG C: const accumulator ====================

// BEFORE (broken code, kept as a comment to show the bug)
// function sumTo(n) {
//     const total = 0; // ← the bug: const cannot change, but the loop changes total
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log('Bug C:', sumTo(3));

// BUG
// actual (before fix): TypeError: Assignment to constant variable.
// why: const cannot change, but total += i changes it on every pass
// fix: the accumulator uses let, declared outside the loop

// AFTER (fixed code)
function sumTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log('Bug C:', sumTo(3)); // Bug C: 6: total collects 1 + 2 + 3

// ==================== BUG D: arrow function called before its line ====================

// BEFORE (broken code, kept as a comment to show the bug)
// console.log('Bug D:', square(3)); // ← the bug: square is used before the line that creates it
// const square = (n) => n * n;

// BUG
// actual (before fix): ReferenceError: Cannot access 'square' before initialization
// why: an arrow function stored in const only exists after its line runs
// fix: define first, call below
//      bonus: as a function declaration, the original order works (hoisting)

// AFTER (fixed code)
const square = (n) => n * n;
console.log('Bug D:', square(3)); // Bug D: 9: square exists by the time it is called
