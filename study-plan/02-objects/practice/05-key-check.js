// Task: Compare two ways to check whether a key exists: !== undefined vs the in operator.

const user = {
    username: 'mira',
    email: 'mira@example.com',
    phone: undefined,
};

// Checks the VALUE: is what is inside the drawer something other than undefined?
function hasPropertyWithUndefinedCheck(obj, key) {
    return obj[key] !== undefined;
}

// Checks the DRAWER: does a key with this name exist, whatever its value?
function hasPropertyWithIn(obj, key) {
    return key in obj;
}

console.log('With !== undefined:');
console.log(hasPropertyWithUndefinedCheck(user, 'email')); // true: email has a value
console.log(hasPropertyWithUndefinedCheck(user, 'phone')); // false: WRONG, phone exists but its value is undefined
console.log(hasPropertyWithUndefinedCheck(user, 'address')); // false: address does not exist

console.log('\nWith in:');
console.log(hasPropertyWithIn(user, 'email')); // true: email exists
console.log(hasPropertyWithIn(user, 'phone')); // true: phone exists, even though its value is undefined
console.log(hasPropertyWithIn(user, 'address')); // false: address does not exist

// Why the results differ:
// !== undefined looks at the value, so a key that exists with the value undefined looks missing.
// in only asks whether the key exists, so it is the reliable way to check for a property.
