class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var avg = par + this.handicap;
    return `I usually shoot a ${avg} on average.`;
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration = 500;
    } else if (golfCourse.difficulty === "moderate") {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
  }

  whatYaShoot(par) {
    if (par > 0) {
      this.frustration += 20;
      return "Doh!";
    } else if (par < 0) {
      this.frustration = 0;
      return "I AM THE GREATEST GOLFER ALIVE!";
    } else {
      this.frustration -= 10;
      return "Booyah!";
    }
  }
}

module.exports = Golfer;
