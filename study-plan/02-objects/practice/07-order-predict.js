// Task: Predict the for...in order of integer keys and text keys, then check it.

const mixedKeys = {
    banana: 1,
    10: 'ten',
    apple: 2,
    2: 'two',
    3.5: 'three and a half',
    '-1': 'minus one',
    1: 'one',
};

for (const key in mixedKeys) {
    console.log(key);
}

// prediction: 1, 2, 10, banana, apple, 3.5, '-1'
// integer key is a number that is neither minus (-) or decimal
// if it's not integer key, then written as is (banana, apple, minus number, and decimal number)
