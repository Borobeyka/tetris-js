class Field {
    constructor() {
        this.blocks = [];
    }

    getIndexByYCoord(y) {
        for (let i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].y == y)
                return i;
        }
        return false;
    }

    show() {
        for (let i = 0; i < this.blocks.length; i++)
            this.blocks[i].show();
    }

    addFigure(figure) {
        for (let i = 0; i < figure.blocks.length; i++)
            this.blocks.push(figure.blocks[i]);
        game.generateFigure();
    }

    check() {
        let arr = [];
        for (let i = 0; i < this.blocks.length; i++) \
            arr.push(this.blocks[i].y);
        arr = getUniqueElems(arr);
        print(arr);
        // let flag = false;
        // for (let j = 0; j < arr.length && !flag; j++) {
        //     let count = 0;

        //     for (let i = 0; i < this.blocks.length; i++) {
        //         if (this.blocks[i].y == arr[j]) count++;

        //         print("j:" + j + " count:" + count);


        //         if (count == blocksPerWidth) {
        //             print("deleted");
        //             for (let i = 0; i < this.blocks.length; i++)
        //                 this.blocks[i].updateCoords(0, blockWidth);
        //                 flag = true;
        //             break;
        //         }
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