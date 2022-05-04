class SquareDonut extends Shape{
    constructor(_posX, _posY, _width, _height, _scale) {
        super(_posX, _posY, _scale);
        this.posX = _posX;
        this.posY = _posY;
        this.width = random(50, 80);
        this.height = random(30, 80);
        this.angle = random(0, 360);
        this.innerRadius = random(20, 50);
    }
    render() {
        fill(0);
        noStroke();
        push()
        translate(this.posX, this.posY)
        rotate(this.angle)
            //Outer Shape

        beginShape();
        vertex(-this.width / 2, -this.width / 2)
        vertex(this.width / 2, -this.width / 2)
        vertex(this.width / 2, this.width / 2)
        vertex(-this.width / 2, this.width / 2)
            //Inner Shae
        beginContour();
        vertex(-this.innerRadius, -this.innerRadius)
        vertex(-this.innerRadius, this.innerRadius)
        vertex(this.innerRadius, this.innerRadius)
        vertex(this.innerRadius, -this.innerRadius)


        endContour();
        endShape(CLOSE);
        pop()
    }
}