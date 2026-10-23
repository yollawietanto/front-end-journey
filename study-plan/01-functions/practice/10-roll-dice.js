// Task: return a random whole number from 1 to 6, and roll the dice 5 times.

// SHARED by both options
const DICE_SIDES = 6;
const TOTAL_ROLLS = 5;

// PRODUCER: one roll, one number; needs nothing from outside
function rollDice() {
    return Math.floor(Math.random() * DICE_SIDES) + 1;
}

// OPTION 1: producer + loop outside (no performer)
console.log('Option 1:');
for (let i = 1; i <= TOTAL_ROLLS; i++) {
    console.log(rollDice());
}

// OPTION 2 (preferred): producer + performer
// PERFORMER: its one job is "show several rolls", so the loop belongs inside it
function logDiceRolls(totalRolls) {
    for (let i = 1; i <= totalRolls; i++) {
        console.log(rollDice()); // the performer asks the producer for one roll every round
    }
}

console.log('Option 2:');
logDiceRolls(TOTAL_ROLLS);
