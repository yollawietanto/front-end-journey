// Task: write triple(n), test it with 2, 5 and 10, then predict triple(triple(2)).

function triple(n) {
    return n * 3;
}

console.log(triple(2)); // 6
console.log(triple(5)); // 15
console.log(triple(10)); // 30
console.log(triple(triple(2))); // 18 (the inner call runs first: 6, then 6 * 3)
