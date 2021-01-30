let figure;
let game;
let field;
let lastUpdate = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    game = new Game();
    field = new Field();
    game.generateFigure();

    setInterval(() => {
        if(!game.paused)
            figure.check();
    }, 10);
}

function draw() {
    if (millis() - updatePerMillis >= lastUpdate) {
        //keyPooling();
        if (!game.paused) {
            background(backgroundColor);

            figure.show();
            field.show();
            figure.updateCoords(0, blockWidth);
        }
        lastUpdate = millis();
    }
}

function keyPooling() {
    if (!game.paused) {
        if (keyIsDown(32)) figure.updateCoords(0, velocityFast);
    }
}

function keyPressed() {
    //print(keyCode);
    if (key == "Escape") game.paused = !game.paused;
    if (!game.paused) {
        if (keyCode == 68) // right
            figure.updateCoords(blockWidth, 0);
        else if (keyCode == 65) // left
            figure.updateCoords(-blockWidth, 0);
        else if (keyCode == 82) // rotate (r)
            figure.rotate();
        else if (keyCode == 84)
        {
            field.addFigure(figure);
            game.generateFigure();
        }
    }
}