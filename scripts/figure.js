class Figure {
    constructor(x, y, color, figure) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blocks = [];
        for(let i = 0; i < figure.length; i++) {
            for(let j = 0; j < figure[i].length; j++) {
                if(figure[i][j] != 0)
                    this.blocks.push(new Block(this.x + j * blockWidth, this.y + i * blockWidth, this.color));
            }
        }
    }

    show() {
        for(let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    getCoords() {
        return {
            x : this.x,
            y : this.y
        };
    }

    setCoords(x, y) {
        for(let i = 0; i < this.blocks.length; i++)
            this.blocks[i].setCoords(x, y);
        this.x = x;
        this.y = y;
    }

    updateCoords(x, y) {
        for(let i = 0; i < this.blocks.length; i++)
            this.blocks[i].updateCoords(x, y);
        this.x += x;
        this.y += y;
    }
}