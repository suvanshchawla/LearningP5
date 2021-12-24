let angle;

let AngleA = 0.0001;
let AngleV = 0;
let gravity = 1;
let bob;
let len;
let origin;



function setup() {
  createCanvas(600, 800);
  origin = createVector(300,0)
  angle = PI/4;
  bob = createVector();
  len = 200;
}

function draw() {
  background(0);

  let force = gravity * sin(angle);
  AngleA = (-1 * force)/len;
  
  AngleV += AngleA; 
  angle += AngleV;
  
  AngleV *=0.99999999999;
  
  
  bob.x = len*sin(angle) + origin.x;
  bob.y = len*cos(angle) + origin.y;
  
  stroke(255);
  strokeWeight(8)
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
  
  
}