var total = 0;

class Craft {
  constructor(object) {
    this.name = object.type;
    this.materials = object.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return "All done! It looks great!";
  }

  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      total += this.materials[i].calculateMaterialCost()
    }
    return total;
  }
}


module.exports = Craft;
