class Block {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    show() {
        stroke(strokeColor);
        strokeWeight(strokeWidth);
        fill(this.color);
        square(this.x, this.y, blockWidth);
    }

    getCoords() {
        return {
            x: this.x,
            y: this.y
        };
    }

    updateCoords(x, y) {
        this.x += x;
        this.y += y;
    }
}