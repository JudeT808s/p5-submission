class CirclePattern {
  constructor( _posX, _posY,  _radius, _objectCount, _scaler = 1) {
    this.shapes = [];
    this.objectCount = _objectCount;
    this.angleStep = 360 / this.objectCount;
    this.radius = _radius;
    this.scaler = _scaler;
    this.posX = _posX;
    this.posY = _posY;
  }
  populateShapes() {
    for (let a = 0; a < 360; a = a + this.angleStep) {
      let posX = this.radius * cos(a);
      let posY = this.radius * sin(a);
      this.shapes.push(new Polygon(posX, posY, (this.scaler = 0.25)));
      this.radius = this.radius - 0.75;
    }
  }
  render() {
    push()
    translate(this.posX, this.posY);
    // translate(400, 400);
    this.shapes.forEach((shape) => {
      shape.render();
      shape.step();
    });
    pop()

    // angle+= +4
  }
}
