class Game {
    constructor() {
        this.message = Game.welcomeMessage();
    }

    static welcomeMessage() {
        console.log("Welcome to Mastermind!");
        console.log("Your objective is to correctly guess the color in each of four slots.");
        console.log("Each slot contains one of five colors: red, purple, green, orange, or yellow.");
    }   
}

console.log(new Game);