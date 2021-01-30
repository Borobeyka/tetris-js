let figure;
let game;
let lastUpdate = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    game = new Game();
    let figID = int(random(figures.length));
    figure = new Figure(0, 0, random(figureColors), figures[figID], figID);
}

function draw() {
    if (millis() - updatePerMillis >= lastUpdate) {
        keyPooling();
        if (!game.paused) {
            background(backgroundColor);

            figure.show();
            figure.updateCoords(0, velocity);
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
    }
}