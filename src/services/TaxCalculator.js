function roundTax(amount) {
    return Math.ceil(amount * 20) / 20;
}

function calculateTax(item) {
    let tax = 0;
    if (!item.isExempt) tax += 0.10 * item.price;
    if (item.isImported) tax += 0.05 * item.price;
    return roundTax(tax);
}

module.exports = { calculateTax };
