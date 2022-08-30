import Dice from './dice.js';

export default class Tortoise {
    constructor(){
        this.position = 0;
        this.step = new Step();
    }

    getPosition() {
        return this.position
    }

    go(){
        let step = this.step.walk();

        if (step <= 10) {
            this.position += 3;
        } else if (step < 15) {
            this.position -=6
        } else 
        this.getPosition += 1;

        if (this.position > 100)
            return this.position = 100;
        else
            return this.position;
    }
}

module.export = Tortoise;