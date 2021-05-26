import prompt from 'prompt';

class Player {
    constructor() {
        this.guesses = Player.makeGuesses();
    }

    static makeGuesses() {
        prompt.get("guess", function() {
            console.log('good guess');
        });
    }
}

console.log(new Player);