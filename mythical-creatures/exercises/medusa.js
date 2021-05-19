var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(person) {
    var victim = new Statue(person.name);
    if (this.statues.length < 3) {
      this.statues.push(victim);
    } else {
      var freedPerson = new Person(this.statues[0].name, "relieved");
      this.statues.shift();
      this.statues.push(victim);
      return freedPerson;
    }
  }
}




module.exports = Medusa;
