
let mypatterns = [];
let x=0;
let y=0;
let maze = [];



function setup() {
    createCanvas(1400, 800);
    rectMode(CENTER);
    angleMode(DEGREES);
    background(160);

    //Loop adds 5000 lines ready to be translated accross the canvas
    for (let i=0; i <5000; i++){
        maze.push(new Line(0, 0 , 0, 0));
    }
    //Pushes rings into tornado
    for (let i=0; i <5; i++){
        mypatterns.push(new Ring(165 * i, 145 *i, 180, random (20, 50), _scaler = 1))
    }
    //Populates the ring with polygons
    for (let i= 0; i <5; i++){
        mypatterns[i].populateShapes()
    }

}


function draw() {
     background(125);
    for (let i= 0; i <600; i++){
        //cointoss 
        if (random(1) < 0.05){
         maze[i].render()
        }
    }
    

    for (let i= 0; i <5; i++){
        mypatterns[i].render()
        mypatterns[i].step()
    }
}