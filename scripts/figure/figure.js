class Figure {
    constructor(x, y, color, figure, figureID) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blocks = [];
        this.figureID = figureID;
        this.builtBlocks(figure, figureID);
        this.rotateCount = 1;
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
            for (let i = 0; i < this.rotateCount; i++)
                fig = fig[0].map((_, index) => fig.map(row => row[index]).reverse());
        if(this.rotateCount++ == 4) this.rotateCount = 1;
        this.builtBlocks(fig);
    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    updateCoords(x, y) {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].updateCoords(x, y);
        this.x += x;
        this.y += y;
        this.check();
    }

    check() {
        // check left & right sides
        let maxX = this.blocks.reduce((prev, cur) => cur.x > prev.x ? cur : prev).x + blockWidth;
        if (this.x < 0)
            this.updateCoords(blockWidth, 0);
        if (maxX > canvasWidth)
            this.updateCoords(- blockWidth, 0);

        // check floor
        let maxY = this.blocks.reduce((prev, cur) => cur.y > prev.y ? cur : prev).y + blockWidth;
        if (maxY >= canvasHeight || this.isCollisionY())
            field.addFigure(this);
    }

    isCollisionY() {
        for (let i = 0; i < this.blocks.length; i++)
            for (let j = 0; j < field.blocks.length; j++)
                if (this.blocks[i].x == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y ||
                    this.blocks[i].x == field.blocks[j].x && this.blocks[i].y + blockWidth == field.blocks[j].y)
                    return true;
        return false;
    }

    isCollisionX() {
        for (let i = 0; i < this.blocks.length; i++)
            for (let j = 0; j < field.blocks.length; j++)
                if (this.blocks[i].x == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y ||
                    this.blocks[i].x == field.blocks[j].x && this.blocks[i].y + blockWidth == field.blocks[j].y ||
                    this.blocks[i].x + blockWidth == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y ||
                    this.blocks[i].x - blockWidth == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y)
                    return true;
        return false;
    }
}