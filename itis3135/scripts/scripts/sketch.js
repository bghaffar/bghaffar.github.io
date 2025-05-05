let x = 100;
let y = 100;
let diameter = 50;
let speedX = 4;
let speedY = 3;

function setup() {
  createCanvas(600, 400);
  background(200);
}

function draw() {
  background(220);

  fill(0, 102, 153);
  ellipse(x, y, diameter, diameter);

  x += speedX;
  y += speedY;

  if (x > width - diameter / 2 || x < diameter / 2) {
    speedX *= -1;
  }

  if (y > height - diameter / 2 || y < diameter / 2) {
    speedY *= -1;
  }
}
