var Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    this.name = undefined;
    this.location = "Winterfell";
    this.safe = false;
    if (stark) {
      this.name = stark.name;
      this.location = stark.area || "Winterfell";
    }
  }

  sayHouseWords() {
    if (this.safe === true) {
      return "The North Remembers";
    } else {
      return "Winter is Coming";
    }
  }

  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
