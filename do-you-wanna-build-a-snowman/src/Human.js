var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(item, quantity) {
    if (item === "snowballs") {
      this.materials.snowballs = this.materials.snowballs + quantity;
    } else if (item === "coal") {
      this.materials.coal = this.materials.coal + quantity;
    } else if (item === "buttons") {
      this.materials.buttons = this.materials.buttons + quantity;
    } else if (item === "carrots") {
      this.materials.carrots = this.materials.carrots + quantity;
    }
  }

  buildASnowman() {
    return new Snowman(this.materials);
  }

  placeMagicHat() {
    var snowman = this.buildASnowman()
    if (snowman.canWearMagicHat()) {
      snowman.magicHat = true;
      return "Woah, this snowman is coming to life!";
    } else if (!snowman.canWearMagicHat()) {
      snowman.magicHat = false;
      return "I guess I didn't build it correctly.";
    }
  }
}

module.exports = Human;
