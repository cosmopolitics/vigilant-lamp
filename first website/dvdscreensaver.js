var yPosition;
var xPosition;
var yVelocity;
var xVelocity;
var ySpeedHolder;
var xSpeedHolder;
var Red = 3;
var Green = 4;
var Blue = 4;

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent("sketch-container");
  yPosition = random(60, 370);
  xPosition = random(60, 370); //starts off random but not on the edge
  xVelocity = 3;
  yVelocity = 3;
}

function draw() {
  background(4);
  fill(color(Red, Green, Blue));
  noStroke(); //removes outlike
  circle(xPosition, yPosition, 50)
  
  if (yPosition >= height-25) { //north side boundry
    yVelocity = -yVelocity;
    Red = random(100, 255);
    Green = random(100, 255);
    Blue = random(100, 255);
  }
  else if (yPosition <= 25) { //south side boundry
    yVelocity = -yVelocity;
    Red = random(100, 255);
    Green = random(100, 255);
    Blue = random(100, 255);
  }
  if (xPosition >= width-25) { //east side boundry
    xVelocity = -xVelocity;
    Red = random(100, 255);
    Green = random(100, 255);
    Blue = random(100, 255);
  }
  else if (xPosition <= 25) { //west side boundry
    xVelocity = -xVelocity;
    Red = random(100, 255);
    Green = random(100, 255);
    Blue = random(100, 255);
  }
  yPosition = yPosition + yVelocity
  xPosition = xPosition + xVelocity 
}

function mouseClicked() { //click to stop the ball function
  if (yVelocity === 0) {
    yVelocity = ySpeedHolder; //added vars are for momentum preservation
    xVelocity = xSpeedHolder; 
  } else {
    ySpeedHolder = yVelocity;
    xSpeedHolder = xVelocity;
    yVelocity = 0;
    xVelocity = 0;
  }
}