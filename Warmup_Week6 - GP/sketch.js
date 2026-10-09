function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

  //rect(random(0,400),random(0,400),200,200);
  
}

//Make a randomly colored square when you hit the "A" Key.

function keyPressed() {
  if (key == 'a') {
    fill(random(0,255),random(0,255),random(0,255));
    rect(random(0,400),random(0,400),200,200);
  }
}