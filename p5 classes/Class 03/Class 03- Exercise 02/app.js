let pattern01;
let pattern02;
let pattern03;
let mypatterns = [];

// let gridCount = 10;
// let gridSpacing = 800 / gridCount;

// let pattern01;

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    angleMode(DEGREES);

    mypatterns.push(new CirclePattern(400, 400, 100, 5, (_scaler = 0.4)));
    mypatterns.push(new CirclePattern(400, 400, 300, 20, (_scaler = 0.4)));
    mypatterns.push(new CirclePattern(300, 500, 200, 20, (_scaler = 0.4)));

    mypatterns.forEach(pattern => {
        pattern.populateShapes();
    });
    //   pattern01.populateShapes();

}


function draw() {
    background(125);

    // pattern01.render();

    mypatterns.forEach(pattern => {
        pattern.render();
        pattern.populateShapes();
    });

    // shapes.step
}