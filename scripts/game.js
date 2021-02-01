class Game {
    constructor() {
        this.paused = false;
        this.over = false;
        this.score = 0;
    }

    generateFigure() {
        for(let i = 0; i < field.blocks.length; i++) {
            for(let j = 0; j < canvasWidth; j++) {
                for(let k = 0; k < 3 * blockWidth; k++) {
                    if(field.blocks[i].x == j && field.blocks[i].y == k) {
                        game.over = true;
                        noLoop();
                    }
                }
            }
        }
        let figID = int(random(figures.length));
        //let x = int(random(blocksPerWidth - figures[figID][0].length + 1)); // random X coord
        let x = int(blocksPerWidth / 2  - figures[figID][0].length + 1); // middle of screen
        figure = new Figure(x * blockWidth, 0, random(figureColors), figures[figID], figID);
    }
}