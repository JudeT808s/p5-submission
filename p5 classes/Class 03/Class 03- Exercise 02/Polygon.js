class Polygon extends Shape {
  constructor(_posX, _posY, _scale = 1, _innerRadius = random(20, 40)) {
    super(_posX, _posY, _scale);

    this.numberOfSides = Math.floor(random(3, 8));

    this.innerRadius = random(20, 80);
  }
  render() {
    fill(255);
    noStroke();
    push();
    translate(this.posX, this.posY);
    rotate(this.angle);

    let angleStep = 360 / this.numberOfSides;
    beginShape();
    for (let a = 0; a < 360; a = a + angleStep) {
      vertex((cos(a) * this.width) / 2, (sin(a) * this.width) / 2);
    }
    /* beginContour();
        vertex(-this.innerRadius, -this.innerRadius)
        vertex(-this.innerRadius, this.innerRadius)
        vertex(this.innerRadius, this.innerRadius)
         vertex(this.innerRadius, -this.innerRadius)


         endContour();*/
    endShape(CLOSE);

    pop();
  }

 
}
