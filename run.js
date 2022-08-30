import Hare from "./hare.js";
import Tortoise from "./tortoise.js";
import Dice from "./dice.js"

export default class Run {
    constructor(hare1, tortoise1) {
      this.hare1 = hare1;
      this.hare1.position = 0;
      this.tortoise1 = tortoise1;
      this.tortoise1.position = 0;
      this.dice = new Dice();
    }
  
    start() {
    do {
        this.hare1.go();
        this.tortoise1.go()
    } while (this.hare1.position < 100 && this.tortoise1.position <100)

    if (this.hare1.position >= 100 && this.tortoise1.position >= 100) {
        console.log("- EMPATE -");
    } else {
        console.log(`Winner ${this.hare1.position >= 100 ? 'Hare': 'Tortoise'}`);
    }
    }
}

module.exports = Run;