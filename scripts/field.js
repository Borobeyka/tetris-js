class Field {
    constructor() {
        this.blocks = [];
    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    addFigure(figure) {
        for(let i = 0; i < figure.blocks.length; i++) {
            this.blocks.push(figure.blocks[i]);
        }
        //this.blocks.push(figure);
        print(this.blocks);
        game.generateFigure();
    }
}