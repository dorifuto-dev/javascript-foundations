class Gear {
  constructor(type, number) {
    this.type = type;
    this.quantity = number;
  }

  checkForValidity() {
    if (this.type === 'ammunition' || this.type === 'food' || this.type === 'clothes') {
      return `Great, we\'ll need lots of ${this.type}!`
    } else {
      return `I don\`t think a ${this.type} will help us.`
    }
  }
}

module.exports = Gear;
