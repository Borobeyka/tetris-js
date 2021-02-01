let figure;
let game;
let field;
let lastUpdate = 0;
let command;
let commandCount = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    game = new Game();
    field = new Field();
    game.generateFigure();
}

function draw() {
    if (millis() - updatePerMillis >= lastUpdate) {
        if (!game.paused) {
            keyPooling();
            background(backgroundColor);

            figure.show();
            field.show();
            figure.updateCoords(0, velocity);
        }
        document.getElementById("score").innerHTML = "Score: " + game.score + (game.paused ? " <strong>PAUSED</strong>" : "");
        lastUpdate = millis();
    }
}

function keyPooling() {
    if (command == 1 && figure.y % blockWidth == 0 && !figure.isCollisionX()) {
        for (let i = 0; i < commandCount; i++)
            figure.updateCoords(blockWidth, 0);
        command = 0;
    }
    else if (command == 2 && figure.y % blockWidth == 0 && !figure.isCollisionX()) {
        for (let i = 0; i < commandCount; i++)
            figure.updateCoords(- blockWidth, 0);
        command = 0;
    }
}

function keyPressed() {
    //print(keyCode);
    if (key == "Escape") game.paused = !game.paused;
    if (!game.paused) {
        if (keyCode == 68 && !figure.isCollisionX()) { // right
            if (command != 1) commandCount = 1;
            else commandCount++;
            command = 1;
        }
        else if (keyCode == 65 && !figure.isCollisionX()) {// left
            if (command != 2) commandCount = 1;
            else commandCount++;
            command = 2;
        }
        else if (keyCode == 82) // rotate (r)
            figure.rotate();

        /*
            else if (keyCode == 84) // add figure to field (test)
            field.addFigure(figure);
        */
    }
}