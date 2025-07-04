class Item {
    constructor(quantity, name, price, isImported, isExempt) {
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.isImported = isImported;
        this.isExempt = isExempt;
    }
}

module.exports = Item;
