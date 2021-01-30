let figure;
let game;
let lastUpdate = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    game = new Game();
    figure = new Figure(0, 0, random(figureColors), random(figures));
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
    if (key == "Escape") game.paused = !game.paused;
    if (!game.paused) {
        if (keyCode == 68)
            figure.updateCoords(blockWidth, 0);
        else if (keyCode == 65)
            figure.updateCoords(-blockWidth, 0);
    }
}