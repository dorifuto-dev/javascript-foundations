class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.exercises = 0;
  }

  shootBow() {
    this.exercises = this.exercises + 1;
    if (this.exercises >= 3 || this.layingDown === true) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Twang!!!";
    }
  }

  run() {
    this.exercises = this.exercises + 1;
    if (this.exercises >= 3 || this.layingDown === true) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Clop clop clop clop!!!";
    }
  }

  sleep() {
    if (this.standing === true) {
      return "NO!";
    } else if (this.standing === false && this.layingDown === true) {
      this.layingDown = false;
      this.standing = true;
      this.cranky = false;
      this.exercises = 0;
      return "ZZZZ";
    }
  }

  layDown() {
    if (this.standing === true && this.layingDown === false) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.standing === false && this.layingDown === true) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
