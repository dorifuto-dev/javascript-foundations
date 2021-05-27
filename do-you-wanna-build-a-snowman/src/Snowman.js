class Snowman {
  constructor (snowman){
    this.carrots = snowman.carrots,
    this.coal = snowman.coal,
    this.buttons = snowman.buttons,
    this.snowballs = snowman.snowballs,
    this.magicHat = false
  }
  canWearMagicHat() {
    this.magicHat = true;
  }
}

module.exports = Snowman;
