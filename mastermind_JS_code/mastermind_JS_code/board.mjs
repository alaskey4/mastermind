class Board {
    constructor() {
        this.grid = Board.startGrid();
    }

    static startGrid() {
        const grid = [];
        for (let i = 0; i < 4; i++) {
            grid.push([]);
        }
        return grid;
    }
}

export default Board

console.log(new Board);