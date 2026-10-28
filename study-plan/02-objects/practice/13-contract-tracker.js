// Task: Summarise a set of contracts: print each one, total the value of the signed ones, and count contracts per status.

const SIGNED_STATUS = 'Signed';

// each key is a contract code; each value is another object with that contract's details
const contracts = {
    'LA-001': { title: 'Lease Agreement', value: 120000000, status: 'Signed' },
    'SA-002': { title: 'Service Agreement', value: 45000000, status: 'Draft' },
    'NDA-003': { title: 'Non-Disclosure Agreement', value: 0, status: 'Signed' },
    'PA-004': { title: 'Partnership Agreement', value: 300000000, status: 'Review' },
};

// PERFORMER: prints one line per contract
function logContractSummary(contracts) {
    for (const code in contracts) {
        const contract = contracts[code]; // the inner object of this contract
        console.log(`${code}: ${contract.title} (${contract.status})`);
    }
}

// PRODUCER: returns the total value of the signed contracts
function calculateSignedValue(contracts) {
    let total = 0;

    for (const code in contracts) {
        const contract = contracts[code];
        if (contract.status === SIGNED_STATUS) {
            total += contract.value;
        }
    }

    return total;
}

// PRODUCER: returns a tally board, one key per status with how many contracts have it
function countByStatus(contracts) {
    const counts = {};

    for (const code in contracts) {
        const status = contracts[code].status;

        if (status in counts) {
            counts[status] += 1; // status already on the board: add one
        } else {
            counts[status] = 1; // first contract with this status: start at one
        }
    }

    return counts;
}

logContractSummary(contracts); // one line per contract: code, title and status
console.log(`Signed contracts total: ${calculateSignedValue(contracts)}`); // sum of the signed contracts' values
console.log('Contracts per status:', countByStatus(contracts)); // the tally board object
