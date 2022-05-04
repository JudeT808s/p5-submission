class Ring {
  constructor( _posX, _posY,  _radius, _objectCount, _scaler = 0.6) {
    this.shapes = [];
    this.objectCount = 30;
    this.angleStep = 360 / this.objectCount;
    this.radius = _radius;
    this.scaler = _scaler;
    this.posX = _posX;
    this.posY = _posY;
    this.angle= 0;
    // this.rotate =  angle+= +4

  }
  populateShapes() {
    // rotate= angle+= +1
    for (let a = 0; a < 360; a = a + this.angleStep) {
      let posX = this.radius * cos(a);
      let posY = this.radius * sin(a);
      this.shapes.push(new Polygon(posX, posY, (this.scaler) ));
      // this.radius = this.radius - 0.75;
    }
  }
  render() {
    push()
    translate(this.posX, this.posY);
    rotate(this.angle)
    // translate(400, 400);
    this.shapes.forEach((shape) => {
      shape.render();
      shape.step();
    });
    pop()

  }
  step(){
    this.angle += 1
  }
  
}
