class Pegs {
    //constructor() {
     //   this.answer = pegSelect();
      //  this.response = pegResponse();
    //}

    pegRandom() {
        return Math.floor(Math.random() * 5)
    }

    pegSelect() {
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

    pegResponse() {
        let colors = ['w', 'b', ''];
        return colors;
    }
}

let startPegs = new Pegs();

export default Pegs

console.log(startPegs.pegSelect());



