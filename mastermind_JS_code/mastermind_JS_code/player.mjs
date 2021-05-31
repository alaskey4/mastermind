import prompt from 'prompt';
import * as Pegs from './pegs.mjs';

class Player {
    constructor() {
        this.guesses = Player.makeGuesses();
    }

    static makeGuesses() {
        prompt.get("guess", function() {
            console.log(Pegs);
        });
    }
}

console.log(new Player);