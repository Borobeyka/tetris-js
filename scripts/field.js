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
        print(this.blocks);
        game.generateFigure();
    }

    checkOnUpdate() {
        // let arr = [];
        // for (let i = 0; i < this.blocks.length; i++) arr.push(this.blocks[i].y);
        // arr = arr.reduce(function (acc, curr) {
        //     if (typeof acc[curr] == "undefined") acc[curr] = 1;
        //     else acc[curr] += 1;
        //     return acc;
        // }, {});
        // for(let i = 0; i < arr.length; i++) {
        //     if(arr[i] == blocksPerWidth) {
        //         print(this.blocks.findIndex(arr[i]));
        //     }
        // }
    }
}

class Matches {
    constructor(index, value) {
        this.index = index;
        this.value = value;
    }
}