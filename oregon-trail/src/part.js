class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.repaired = false;
  }

  break() {
    this.broken = true;
  }

  repair() {
    if (!this.repaired) {
      this.broken = false;
      this.repaired = true;
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    } 
  }
}

module.exports = Part;
