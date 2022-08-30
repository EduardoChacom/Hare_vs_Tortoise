import Dice from './dice.js';

export default class Hare {
    constructor(){
        this.position = 0;
        this.jump = new Step();
    }

    //Objetos.
    getPosition(){
        return this.position;
    }

    go(){
        let jump = this.jump.Steps();

        if(jump <=20){
            this.position == 0;
        } else if(jump <= 40){
            this.position += 9;
        } else if(jump <=50){
            this.position -= 12;
        } else if (jump <= 85){
            this.position += 1;
        } else{
            this.position -= 2;
        }

        if (this.position > 100)
            return this.position = 100;
        else
            return this.position;
    }
    

}