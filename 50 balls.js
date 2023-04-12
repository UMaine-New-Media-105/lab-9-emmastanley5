let colors = ["aqua", "yellow", "orange", "tomato", "pink", "seagreen"]
let listOfBalls = [];
    
function setup() {
  createCanvas(400, 400);
   for (let i = 0; i < 50; i++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisColor = random(colors);
     listOfBalls[i] = new Ball(thisX, thisY, thisColor);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < listOfBalls.length; i++) {
    listOfBalls[i].move();
    listOfBalls[i].show();
  }
}
class Ball {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = 5;
    this.speedY = 5;
  }
  move() {
    this.x = this.x + this.speedX;
    if (this.x > width - 25 || this.x < 25) {
       this.speedX = this.speedX * -1;}
    this.y = this.y + this.speedY;
     if (this.y > width - 25 || this.y < 25) {
       this.speedY = this.speedY * -1;}
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
