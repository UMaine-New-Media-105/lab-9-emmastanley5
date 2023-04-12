
function setup() {
  createCanvas(400, 400);
  dot1 = new Dot(100, 100, random(360));

}

function draw() {
  background("white");
  dot1.move();
 dot1.show();
 
}

class Dot {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 90%, 1)"
    this.addX = 5;
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let dotIsTooFarLeft = (this.x < 0);
    let dotIsTooFarRight = (this.x > width);
    if (dotIsTooFarLeft || dotIsTooFarRight ) {
      this.addX = - this.addX;
    }
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
