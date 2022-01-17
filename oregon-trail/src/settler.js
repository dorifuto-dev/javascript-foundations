class Settler {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.nationality = person.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(sickness) {
    (this.status !== 'dead') && this.ailments.push(sickness);
    if (this.ailments.length === 1) {
      this.status = 'fair';
    } else if (this.ailments.length === 2) {
      this.status = 'poor';
    } else if (this.ailments.length > 2) {
      this.status = 'dead';
    }
  }

  heal() {
    if (this.status !== 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}

module.exports = Settler;