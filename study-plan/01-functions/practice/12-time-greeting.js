// Task: choose a greeting function based on the hour (let + if/else), then greet three people.

const hour = 20;
const MORNING_END_HOUR = 12;
const AFTERNOON_END_HOUR = 18;

// let, not const: declared empty here and filled later inside if/else (const needs its value on the same line)
let generateTimeGreeting;

if (hour < MORNING_END_HOUR) {
    generateTimeGreeting = (name) => `Good morning, ${name}`;
} else if (hour < AFTERNOON_END_HOUR) {
    generateTimeGreeting = (name) => `Good afternoon, ${name}`;
} else {
    generateTimeGreeting = (name) => `Good evening, ${name}`;
}

console.log(generateTimeGreeting('Edward'));
console.log(generateTimeGreeting('Florencia'));
console.log(generateTimeGreeting('Yolla'));

// hour 8: Good morning | hour 14: Good afternoon | hour 16: Good afternoon | hour 20: Good evening
