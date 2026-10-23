// Bug hunt: four common function bugs. Each one shows what the broken code did, why, and the fix.

// BUG A: block body without return
// actual (before fix): Bug A: undefined
// why: with { }, return must be written; without it the function hands back undefined
// fix: concise body (no { }), so the result is returned automatically
const double = (n) => n * 2;
console.log('Bug A:', double(4)); // 8

// BUG B: void function used as if it returned a value
// actual (before fix): 9, then Bug B: NaN
// why: logSquare printed 9 but handed back undefined, and undefined + 1 is NaN
// fix: return instead of console.log, and rename log... to calculate... (producer, not performer)
// the + 1 stays: it is what the caller needs
function calculateSquare(n) {
    return n * n;
}
const result = calculateSquare(3) + 1;
console.log('Bug B:', result); // 10

// BUG C: const accumulator
// actual (before fix): TypeError: Assignment to constant variable.
// why: const cannot change, but total += i changes it on every pass
// fix: accumulator uses let, declared outside the loop
function sumTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log('Bug C:', sumTo(3)); // 6

// BUG D: arrow function called before its line
// actual (before fix): ReferenceError: Cannot access 'square' before initialization
// why: an arrow function stored in const only exists after its line runs
// fix: define first, call below
// bonus: as a function declaration, the original order works (hoisting)
const square = (n) => n * n;
console.log('Bug D:', square(3)); // 9
