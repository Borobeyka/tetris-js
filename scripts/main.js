let figure;
let game;
let field;
let lastUpdate = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    game = new Game();
    field = new Field();
    game.generateFigure();
}

function draw() {
    if (millis() - updatePerMillis >= lastUpdate) {
        if (!game.paused) {
            background(backgroundColor);

            figure.show();
            field.show();
            figure.updateCoords(0, velocity);
        }
        document.getElementById("score").innerHTML = "Score: " + game.score + (game.paused ? " <strong>PAUSED</strong>" : "");
        lastUpdate = millis();
    }
}

function keyPressed() {
    //print(keyCode);
    if (key == "Escape") game.paused = !game.paused;
    if (!game.paused) {
        if (keyCode == 68 && !figure.isCollisionX()) // right
            figure.updateCoords(blockWidth, 0);
        else if (keyCode == 65 && !figure.isCollisionX()) // left
            figure.updateCoords(- blockWidth, 0);
        else if (keyCode == 82) // rotate (r)
            figure.rotate();
        else if (keyCode == 84) // add figure to field (test)
            field.addFigure(figure);
    }
}