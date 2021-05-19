class Magician {
  constructor(title) {
    this.name = `The Great ${title.name}`;
    this.assistant = title.assistant;
    this.favoriteAccessory = title.clothing || "top hat";
    this.confidencePercentage = 10;
  }

  performIncantation(incant) {
    return `${incant.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage = this.confidencePercentage + 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return "WOW! The magician totally just sawed that person in half!";
    } else {
      return "Oh no, this trick is not ready!";
    }
  }
}


module.exports = Magician;
