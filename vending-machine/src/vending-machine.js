class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (this.snacks.some(item => item.name === snack.name)) {
      return "Sorry, that snack is already stocked! Try adding a different snack.";
    } else {
      this.snacks.push(snack);
    }
  }

  purchaseSnack(name, dollars) {

    for (var i = 0; i < this.snacks.length; i++) {
      var change = dollars - this.snacks[i].price;
      if (this.snacks[i].name === name && this.snacks[i].itemsInStock > 0) {
        this.snacks[i].itemsInStock--;
        return `Success! Here is $${change} back!`
      } else {
        return "Sorry, no items in stock. Try another item.";
      }
    }
  }
}

module.exports = VendingMachine;
