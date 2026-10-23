// Task: predict Math.floor, Math.ceil, Math.round and Math.trunc for 4.5, -4.5 and -4.2, then run to check.

console.log(Math.floor(4.5)); // 4
console.log(Math.floor(-4.5)); // -5
console.log(Math.floor(-4.2)); // -5

console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(-4.5)); // -4
console.log(Math.ceil(-4.2)); // -4

console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4 (an exact half always rounds up, toward the bigger number)
console.log(Math.round(-4.2)); // -4

console.log(Math.trunc(4.5)); // 4
console.log(Math.trunc(-4.5)); // -4
console.log(Math.trunc(-4.2)); // -4
