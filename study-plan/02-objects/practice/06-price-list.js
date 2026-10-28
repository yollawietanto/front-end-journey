// Task: Print a price list with for...in, return the total, and find the most expensive item.

const menu = {
    coffee: 25000,
    tea: 18000,
    croissant: 30000,
    juice: 22000,
};

function logMenu(menu) {
    for (const key in menu) {
        console.log(`${key}: Rp${menu[key]}`);
    }
}

function calculateTotal(menu) {
    let total = 0;
    for (const key in menu) {
        total += menu[key];
    }
    return total;
}

function findMostExpensive(menu) {
    let highestPrice = 0;
    let mostExpensiveItem = '';

    for (const key in menu) {
        if (menu[key] > highestPrice) {
            highestPrice = menu[key];
            mostExpensiveItem = key;
        }
    }
    return mostExpensiveItem;
}

logMenu(menu); // prediction: 4 lines, coffee to juice with Rp
console.log(`\nTotal: Rp${calculateTotal(menu)}`); // prediction: Rp95000
console.log(`\nThe most expensive item within the menu is ${findMostExpensive(menu)}`); // prediction: croissant
