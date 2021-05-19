class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.meals = this.meals + 1;
    if (this.meals >= 3) {
      this.hungry = false;
    }
  }


}

module.exports = Dragon;
