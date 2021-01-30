class Figure {
    constructor(x, y, color, figure, figureID) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blocks = [];
        this.figureID = figureID;
        this.builtBlocks(figure, figureID);
        this.rotated = false;

        setInterval(() => {
            this.check();
        }, updatePerMillis / 10);
    }

    builtBlocks(figure) {
        this.blocks = [];
        for (let i = 0; i < figure.length; i++)
            for (let j = 0; j < figure[i].length; j++)
                if (figure[i][j] != 0)
                    this.blocks.push(new Block(this.x + j * blockWidth, this.y + i * blockWidth, this.color));
    }

    rotate() {
        let fig = figures[this.figureID];
        if (!this.rotated)
            for (let i = 0; i < 3; i++)
                fig = fig[0].map((_, index) => fig.map(row => row[index]).reverse());
        this.rotated = !this.rotated;
        this.builtBlocks(fig);

    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    getCoords() {
        return {
            x: this.x,
            y: this.y
        };
    }

    updateCoords(x, y) {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].updateCoords(x, y);
        this.x += x;
        this.y += y;
    }

    check() {
        let maxX = this.blocks.reduce((prev, cur) => cur.x > prev.x ? cur : prev).x + blockWidth;
        if (this.x < 0)
            this.updateCoords(blockWidth, 0);
        if (maxX > canvasWidth)
            this.updateCoords(- blockWidth, 0);
    }
}