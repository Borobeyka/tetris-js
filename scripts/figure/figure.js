class Figure {
    constructor(x, y, color, figure, figureID) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blocks = [];
        this.builtBlocks(figure);
        this.figureID = figureID;
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
        if (this.rotateCount++ == 4) this.rotateCount = 1;
        this.builtBlocks(fig);
    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    updateCoords(x, y) {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].updateCoords(x, y);
            //this.blocks[i].show();
        }
        this.x += x;
        this.y += y;
        this.check();
        field.check();
    }

    check() {
        // check left & right sides
        let maxX = this.blocks.reduce((prev, cur) => cur.x > prev.x ? cur : prev).x + blockWidth;
        if (this.x < 0)
            this.updateCoords(blockWidth, 0);
        if (maxX > canvasWidth)
            this.updateCoords(- blockWidth, 0);

        // check floor & blocks
        let maxY = this.blocks.reduce((prev, cur) => cur.y > prev.y ? cur : prev).y + blockWidth;
        let diff = canvasHeight - maxY;

        if(maxY > canvasHeight)
            this.updateCoords(0, - abs(diff));

        if (maxY >= canvasHeight || this.isCollisionY())
            field.addFigure(this);
    }

    /*
    isCollisionFastY() {
        for (let i = 0; i < this.blocks.length; i++)
            for (let j = 0; j < field.blocks.length; j++)
                if (this.blocks[i].x == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y ||
                    this.blocks[i].x == field.blocks[j].x && this.blocks[i].y + blockWidth >= field.blocks[j].y ||
                    this.blocks[i].x == field.blocks[j].x && this.blocks[i].y + blockWidth + velocityFast >= field.blocks[j].y)
                    return true;
        return false;
    }
    */

    isCollisionY() {
        for (let i = 0; i < this.blocks.length; i++)
            for (let j = 0; j < field.blocks.length; j++)
                if (this.blocks[i].x == field.blocks[j].x && this.blocks[i].y == field.blocks[j].y ||
                    this.blocks[i].x == field.blocks[j].x && this.blocks[i].y + blockWidth >= field.blocks[j].y)
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