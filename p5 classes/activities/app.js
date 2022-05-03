// This is where it all begins

let rand = math.random(0, 500);


function setup() {
    createCanvas(500, 500);
    background(255, 0, 0);
    rectMode(CENTER);
}

for (let x = 0; x < numShapes; x++) {

    function draw() {
        stroke(rand);

        rect(x, 0, 50, 50);
    }
}