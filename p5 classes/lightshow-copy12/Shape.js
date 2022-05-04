class Shape {
    constructor(_posX, _posY, _scale = 1, _colour = random(0,255) ) {
        this.posX = _posX;
        this.posY = _posY;
        this.width = random(30, 80);
        this.height = random(30, 80);
        this.angle = random(0, 360);
        this.scale = _scale;
        this.scale = _scale;
        this.colour= _colour
    }

    step(){
        this.angle= this.angle+1
    }
}