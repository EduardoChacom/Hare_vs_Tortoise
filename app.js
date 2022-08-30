class Dice {
    dice(){
        return Math.floor(Math.random() * 100 ) + 1;
    }
}

class Hare {
    constructor(){
        this.position = 0;
        this.jump = new Dice();
    }

    //Objetos.
    getPosition(){
        return this.position;
    }

    go(){
        let jump = this.jump.dice();

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
    }
    

}

class Tortoise {
    constructor(){
        this.position = 0;
        this.step = new Dice();
    }

    //Objetos.  
    getPosition() {
        return this.position
    }

    go(){
        let step = this.gitdice();

        if (step <= 10) {
            this.position += 3;
        } else if (step < 15) {
            this.position -=6
        } else 
        this.getPosition() += 1;
    }
}

let hare1 = new Hare();
let tortoose1 = new Tortoise();


class Start {

    start() {
        do {
            tortoose1.go();
            hare1.go();
            console.log(`Tortoise: ${tortoose1.getPosition()}`);
            console.log(`Liebre: ${hare1.getPosition()}`);
        } while(tortoose1.getPosition() < 100 && hare1.getPosition() < 100);    
    }

    winner() {
        if(hare1.getPosition() > tortoose1.getPosition()) {
            console.log('the winner is the hare!');
        } else if (hare1.getPosition() == tortoose1.getPosition()) {
            console.log('drow');
        } else {
            console.log('the winner is the tortoise');
        }
    }
}

let start = new Start();

start.start();
start.winner();