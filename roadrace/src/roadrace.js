class Roadrace {
  constructor(venue) {
    this.name = venue.title,
    this.location = venue.city,
    this.distance = 0,
    this.participants = []
  }

  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${distance} mile race.`;
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name);
      this.participants[i].runSomeMiles(this.distance);
    }
  }
}

module.exports = Roadrace;
