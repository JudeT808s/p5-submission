class Polygon {
    constructor(_posX, _posY) {
        this.posX = _posX;
        this.posY = _posY;
        this.width = random(30, 80);
        this.height = random(30, 80);
        this.innerRadius = random(15, 35);
        this.numberOfSides = Math.floor(random(3, 8));

    }
    render() {
        fill(255, 0, 0);
        noStroke();
        push();
        translate(this.posX, this.posY);


        beginShape();
        let angleStep = 360 / this.numberOfSides;

        for (let a = 0; a < 360; a = a + angleStep) {
            vertex(this.width / 2 * cos(a), this.width / 2 * (sin(a)));
        }

        beginContour();
        for (let a = 360; a > 0; a = a - angleStep) {
            vertex(this.innerRadius / 2 * cos(a), this.innerRadius / 2 * (sin(a)));
        }
        endContour();

        endShape(CLOSE);

        pop();
    }


}