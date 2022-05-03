// // This is where it all begins

// shapes.push("john");
// shapes.push("David");
// shapes.push("Kevin");


// shapes.unshift("Mark");


// shapes[4] = "Brian";
// shapes[4] = "Legend";

let shapes = [];
let gridCount = 8;
let gridSpacing = 800 / gridCount;

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    angleMode(DEGREES);

    for (let y = 0; y < gridCount; y++) {
        for (let x = 0; x < gridCount; x++) {
            shapes.push(new Rectangle(x * gridSpacing, y * gridSpacing));


        }

    }
}

// shapes[1] = Peter;



function draw() {
    background(125);
    //     // for (let i = 0; i < shapes; i + +) {
    //     shapes[2].render();
    // }

    translate(gridSpacing / 2, gridSpacing / 2);
    shapes.forEach(shape => { shape.render() });
}