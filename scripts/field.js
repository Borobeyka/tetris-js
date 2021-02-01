class Field {
    constructor() {
        this.blocks = [];
    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    addFigure(figure) {
        for (let i = 0; i < figure.blocks.length; i++)
            this.blocks.push(figure.blocks[i]);
        game.generateFigure();
        game.score += points[0];
    }

    deleteBlocksByCoordY(y) {
        for (let i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].y == y) {
                this.blocks.splice(i, 1);
                this.deleteBlocksByCoordY(y);
                break;
            }
        }
    }

    check() {
        let arr = [];
        for (let i = 0; i < this.blocks.length; i++)
            arr.push(this.blocks[i].y);

        arr = arr.reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {});
        for(let key in arr) {
            if(arr[key] == blocksPerWidth) {
                this.deleteBlocksByCoordY(key);
                for (let i = 0; i < this.blocks.length; i++)
                    if(this.blocks[i].y > 0 && this.blocks[i].y <= key - blockWidth)
                        this.blocks[i].updateCoords(0, blockWidth);
                this.check();
                game.score += points[1];
                break;
            }
        }

    }
}