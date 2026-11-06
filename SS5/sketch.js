function setup() {
  createCanvas(400, 400);
  background("BLACK");
}

function draw() {
  
  
  //the idea of this is that it's a checkerboard pattern.
  noStroke();
  fill(mouseX,255,mouseY);
  baseShape();

}

function baseShape() {
  rect(200,200,100,100);
  rect(100,100,100,100);
}
