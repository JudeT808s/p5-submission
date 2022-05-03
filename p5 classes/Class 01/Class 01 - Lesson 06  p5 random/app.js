// This is where it all begins

//This returns a float between 0 and 1
// We are using a JS Math function
let randomNumber = Math.random();

//Between 0 and 100
let randomNumber2 = Math.random() * 100;

// Between 30 and 80
let randomNumber3 = Math.random() *50 + 30;

// console.log(randomNumber)

let randomNumber4;

function setup(){
    createCanvas(500,500);
    background(255,0,0);

    randomNumber4 = random(30,80)
    console.log(randomNumber4)

    randomLocX = random(0,500);
    randomLocY = random(0,500);


}

function draw(){
    background(255,0,0);

    fill(0,0,255);
    stroke(0,255,0);
    strokeWeight(3);

    rect(randomLocX,randomLocY,100,100);

}