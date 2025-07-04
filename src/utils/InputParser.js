const Item = require('../models/Item');

const exemptItems = ['book', 'chocolate', 'pill'];

function parseLine(line) {
    const match = line.match(/(\d+) (.+) at (\d+\.\d{2})/);
    if (!match) throw new Error(`Invalid line: ${line}`);

    const quantity = parseInt(match[1]);
    const name = match[2];
    const price = parseFloat(match[3]);
    const isImported = name.includes('imported');
    const isExempt = exemptItems.some(word => name.includes(word));

    return new Item(quantity, name, price, isImported, isExempt);
}

module.exports = { parseLine };
