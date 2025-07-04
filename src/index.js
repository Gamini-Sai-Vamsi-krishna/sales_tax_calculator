const readline = require('readline');
const { parseLine } = require('./utils/InputParser');
const { calculateTax } = require('./services/TaxCalculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter items line-by-line (or type 'done' to finish):");

let items = [];
rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'done') {
        rl.close();
        processInput(items);
    } else {
        items.push(line);
    }
});

function processInput(input) {
    let totalTax = 0;
    let totalPrice = 0;
    console.log('\nOutput:');

    input.forEach(line => {
        const item = parseLine(line);
        const tax = calculateTax(item) * item.quantity;
        const totalItemPrice = (item.price + tax / item.quantity) * item.quantity;

        totalTax += tax;
        totalPrice += totalItemPrice;

        console.log(`${item.quantity} ${item.name}: ${totalItemPrice.toFixed(2)}`);
    });

    console.log(`Sales Taxes: ${totalTax.toFixed(2)}`);
    console.log(`Total: ${totalPrice.toFixed(2)}`);
}
