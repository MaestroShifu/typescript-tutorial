let dice!: number; // <- ! simbol define assertion

const rollDice = () => {
    dice = (Math.floor(Math.random() * 6) + 1);
};

rollDice();
console.log('Current Dice Value', dice);

rollDice();
console.log('After another roll', dice);