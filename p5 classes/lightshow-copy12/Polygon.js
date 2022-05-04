class Polygon extends Shape {
  constructor(_posX, _posY, _scale = 1, _innerRadius = random(20, 40),) {
    super(_posX, _posY, _scale);
    // this.width = random(30, 80);

    this.numberOfSides = Math.floor(random(3, 8));

    this.innerRadius = _innerRadius;
  }
  render() {
    fill(this.colour/*random(125,100),0, random(125,80)*/);
    noStroke();
    push();
    translate(this.posX, this.posY);
    rotate(this.angle);


    beginShape();
    let angleStep = 360 / this.numberOfSides;

    for (let a = 0; a < 200; a = a + angleStep) {
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
