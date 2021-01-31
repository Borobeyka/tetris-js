class Game {
    constructor() {
        this.paused = false;
        this.score = 0;
    }

    generateFigure() {
        let figID = int(random(figures.length));
        let x = int(random(blocksPerWidth - figures[figID][0].length + 1)) * blockWidth;
        figure = new Figure(x, 0, random(figureColors), figures[figID], figID);
    }
}