class Hobbit {
  constructor(title) {
    this.name = title.name;
    this.age = 0;
    this.adult = false;
    this.old = false;

  }
  celebrateBirthday() {
    this.age = this.age + 1;
    if (this.age < 33) {
      this.adult = false;
      this.old = false;
    } else if (this.age >= 33 && this.age < 101) {
      this.adult = true;
      this.old = false;
    } else if (this.age >= 101) {
      this.adult = true;
      this.old = true;
    }

  }

  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      this.hasRing = false;
      return "You can't have it!";

    }
  }
}



module.exports = Hobbit;
