// Task: Create spending objects with a computed key, then print and total a month of weekly spending.

// PART A: Computed Property Name Inside a Function

// PRODUCER: builds and returns a new object; the key comes from the category parameter
function createSpending(category, amount) {
    return { [category]: amount };
}

// PART B: Dynamic Keys in a Loop

const TOTAL_WEEKS = 4;

const monthlySpending = {
    'week-1': 350000,
    'week-2': 420000,
    'week-3': 280000,
    'week-4': 510000,
};

// WAY 1: build each key from a counter (needs the key pattern and the number of weeks)
function logWeeklySpending(spending) {
    for (let i = 1; i <= TOTAL_WEEKS; i++) {
        const key = `week-${i}`; // step 1: build the label
        console.log(`${key}: ${spending[key]}`); // step 2: open the drawer, print it
    }
}

function calculateMonthlyTotal(spending) {
    let total = 0; // accumulator: let, outside the loop
    for (let i = 1; i <= TOTAL_WEEKS; i++) {
        const key = `week-${i}`;
        total += spending[key];
    }
    return total; // after the loop ends
}

// WAY 2: for...in hands over every key, whatever its name and however many there are
function logWeeklySpendingWithForIn(spending) {
    for (const key in spending) {
        console.log(`${key}: ${spending[key]}`);
    }
}

function calculateMonthlyTotalWithForIn(spending) {
    let total = 0;
    for (const key in spending) {
        total += spending[key];
    }
    return total;
}

// CALLS (definitions on top, calls at the bottom)
console.log(createSpending('food', 50000)); // { food: 50000 }
console.log(createSpending('transport', 20000)); // { transport: 20000 }

logWeeklySpending(monthlySpending); // week-1: 350000 ... week-4: 510000
console.log(`Monthly total: ${calculateMonthlyTotal(monthlySpending)}`); // Monthly total: 1560000

logWeeklySpendingWithForIn(monthlySpending); // same four lines
console.log(`Monthly total: ${calculateMonthlyTotalWithForIn(monthlySpending)}`); // Monthly total: 1560000

// WHICH WAY? (Way 2 is much better, cleaner, and safer)
// Way 1 (for + built key): only when the keys follow a numbered pattern AND you know how many.
//        If a week-5 is added, TOTAL_WEEKS must be changed too, or week-5 is silently skipped.
// Way 2 (for...in): reads every key that exists. Adding week-5 needs no other change. Safer here.
