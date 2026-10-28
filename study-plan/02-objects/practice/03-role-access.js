// Task: Replace a switch with an object lookup that returns a default when the role is unknown.

const NO_ACCESS = 'No access';

const roleAccess = {
    owner: 'Full access',
    admin: 'Manage users',
    editor: 'Edit documents',
    viewer: 'Read only',
};

function getAccess(role) {
    if (role in roleAccess) {
        return roleAccess[role];
    } else {
        return NO_ACCESS;
    }
}

console.log(getAccess('editor')); // Edit documents
console.log(getAccess('viewer')); // Read only
console.log(getAccess('guest')); // No access

// Object lookup: jumps straight to the key → O(1), one step no matter how many keys.
