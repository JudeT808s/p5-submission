class Square extends Shape{
    constructor(_posX, _posY, _scale = 1) {
        super(_posX, _posY, _scale)
    }
    render() {
        fill(255);
        noStroke();
        push()
        translate(this.posX, this.posY)
        rotate(this.angle)
        rect(0, 0, this.width, this.height)
        pop()
    }

    
}