class Player {
    constructor() {
        this.guesses = Player.makeGuesses();
    }

    static makeGuesses() {
        console.log("Your opponent has chosen colors at random to fill four spots.")
        console.log("The colors were chosen from among these five: red, purple, green, orange, and yellow.")
        console.log("Enter the first letter of the color you think is in each position:")
    }


}

console.log(new Player);