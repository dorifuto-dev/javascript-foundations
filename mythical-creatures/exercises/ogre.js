class Ogre {
  constructor(ogre) {
  this.name = ogre.name;
  this.home = ogre.abode || 'Swamp';
  this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 3) {
      this.swings++;
    } else if (human.encounterCounter === 6) {
      this.swings++;
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

var Human = require('./human')

module.exports = Ogre;
