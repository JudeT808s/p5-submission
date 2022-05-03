// This is where it all begins

let numShapes = 20;
shapeGap = 500 / numShapes;
let numLines = 50;
lineGap = 500 / numLines;



// for (let i=0; i<100;i++){
//     console.log(i%4);
// }
function setup() {
    createCanvas(500, 500);
    background(255, 0, 0);
    angleMode(DEGREES);
    //rectMode(CENTER);
}

function draw() {
    background(0, 0, 0);

    translate(shapeGap / 2, shapeGap / 2);

    for (let y = 0; y < numShapes; y++) {
        for (let x = 0; x < numShapes; x++) {
            noFill();
            stroke(180);
            ellipse(x * shapeGap, y * shapeGap, shapeGap, shapeGap);
        }
    }
}

function drawGrid() {
    background(20)
    drawGrid();
    for (let x = 0; x < numLines; x++) {
        if (x % 5 == 0) {
            noFill();
            stroke(0, 255, 0);
            line(x * lineGap, 0, x * lineGap, 500);
            line(0, x * lineGap, 500, x * lineGap);
            // line(0,x*lineGap,x*lineGap, 500);
        } else {
            noFill();
            stroke(0, 255, 0, 100);
            line(x * lineGap, 0, x * lineGap, 500);
            line(0, x * lineGap, 500, x * lineGap);
            // line(0,x*lineGap,x*lineGap, 500);
        }

    }
}