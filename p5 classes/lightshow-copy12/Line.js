class Line{
    constructor(_posX, _posY, _dextX, _destY, /*_spacing = 10,_colour*/ ){
        this.posX= _posX;
        this.posY= _posY;
        this.destX= _posX;
        this.destY= _posY;
         this.spacing = 10;
        this.colour;
    }
  
   
  render(){
    stroke(random(65,255),random(65,255),random(65,255) )
    push()
    //Cointoss to whether the line goes right down
    if (random(1) < 0.5){
        line(x,y,x + this.spacing ,y + this.spacing);
         this.colour = (0,0,random(0,255))

    }
    else{
    //or whether the line goes  left diwn

    line(x,y + this.spacing,x + this.spacing,y)
    this.colour = (0,0,random(0,255))


    }
    //if X is equal to canvas edge resets back to start of canvas and moves down 10
    x = x + this.spacing;
    if(x >width){
    x = 0;
    y = y+ this.spacing
}
    pop()
}
}


