// Task: Fix a draft that accidentally changes the original contract (copy by reference).

// BEFORE (broken code, kept as a comment to show the bug)
// const contract = {
//     title: 'Lease Agreement',
//     value: 120000000,
//     status: 'Signed',
// };
//
// const draft = contract; // ← the bug: copies only the reference, not the object
// draft.value = 150000000;
// draft.status = 'Draft';
//
// console.log('Original:', contract);
// console.log('Draft:', draft);

// BUG
// actual (before fix): both lines printed value 150000000 and status 'Draft', the original was changed too
// why: const draft = contract; copied only the reference, so draft and contract were one shared object
// fix: create a NEW object with Object.assign({}, contract), then change only the copy

// AFTER (fixed code)
const contract = {
    title: 'Lease Agreement',
    value: 120000000,
    status: 'Signed',
};

const draft = Object.assign({}, contract); // a new object, separate from contract
draft.value = 150000000;
draft.status = 'Draft';

console.log('Original:', contract); // still 120000000 and 'Signed'
console.log('Draft:', draft); // 150000000 and 'Draft', only the copy changed
