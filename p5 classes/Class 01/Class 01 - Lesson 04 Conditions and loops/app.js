// This is where it all begins

let numShapes = 10;
shapeGap = 500 / numShapes;
let numLines = 50;
lineGap = 500 / numLines;

function checkNum(_num) {
  if (_num % 2 == 0) {
    console.log("It's even");
  } else {
    console.log("It's odd");
  }
  return _num;
}

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

  fill(0, 0, 255);
  stroke(255);

  // for(let x=0; x<numShapes; x++){
  //     if(x%2 == 0){
  //         fill(0,0,255)
  //         stroke(255)
  //         rect(x*shapeGap,0,50,50);
  //     }else{
  //         fill(0,255,255)
  //         stroke(255)
  //         rect(x*shapeGap,0,50,50);
  //     }
  // }

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
