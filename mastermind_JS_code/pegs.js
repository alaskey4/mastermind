class Pegs {
    constructor() {
        this.answer = Pegs.pegSelect();
    }

    static pegRandom() {
        return Math.floor(Math.random() * 5)
    }

    static pegSelect() {
        let colors = ['r', 'p', 'g', 'o', 'y'];
        let choices = []
        let show = []
        for (let i = 0; i < 4; i++) {
            choices.push(colors[Pegs.pegRandom()]);
            show.push(' ');
        }
        console.log(choices);
        return show;
    }

    static pegResponse() {
        let colors = ['w', 'b', ''];
    }
}

console.log(new Pegs);



