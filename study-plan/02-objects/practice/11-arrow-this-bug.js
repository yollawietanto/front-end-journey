// Task: Fix an object method written as an arrow function that cannot read this.

// BEFORE (broken code, kept as a comment to show the bug)
// const account = {
//     owner: 'Mira',
//     balance: 500000,
//     getBalanceInfo: () => { // ← the bug: an arrow function used as a method
//         return this.owner + ' has ' + this.balance;
//     },
// };
//
// console.log(account.getBalanceInfo());

// BUG
// actual (before fix): undefined has undefined
// why: an arrow function has no this of its own, so this.owner and this.balance were undefined.
//      Joined with + and text, undefined becomes the word "undefined" (not NaN like with *).
// fix: write the method as a normal function, so this is the object before the dot (account)

// AFTER (fixed code)
const account = {
    owner: 'Mira',
    balance: 500000,
    getBalanceInfo: function () {
        return this.owner + ' has ' + this.balance;
    },
};

console.log(account.getBalanceInfo()); // Mira has 500000: this now points to account
