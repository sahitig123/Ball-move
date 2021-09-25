var ball = {
  x : 60,
  y : 70,
  r : 40,
  color : "purple",
  xspeed : 0,
  yspeed : 0,
}







function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill (ball.color);
  ball.xspeed = 1
  ball.x = ball.x + ball.xspeed



}