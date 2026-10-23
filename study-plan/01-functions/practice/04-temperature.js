// Task: convert Celsius to Fahrenheit with named constants, and print the result.

const FAHRENHEIT_RATIO = 9 / 5;
const FAHRENHEIT_OFFSET = 32;

function convertCelsiusToFahrenheit(celsius) {
    return celsius * FAHRENHEIT_RATIO + FAHRENHEIT_OFFSET;
}

function logTemperature(celsius) {
    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    console.log(`${celsius}°C equals ${fahrenheit}°F`);
}

logTemperature(0); // 0°C equals 32°F
logTemperature(100); // 100°C equals 212°F
logTemperature(30); // 30°C equals 86°F
