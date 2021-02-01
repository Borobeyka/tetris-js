class Game {
    constructor() {
        this.paused = false;
        this.score = 0;
    }

    generateFigure() {
        let figID = int(random(figures.length));
        //let x = int(random(blocksPerWidth - figures[figID][0].length + 1)); // random X coord
        let x = int(blocksPerWidth / 2  - figures[figID][0].length + 1); // middle of screen
        figure = new Figure(x * blockWidth, 0, random(figureColors), figures[figID], figID);
    }
}