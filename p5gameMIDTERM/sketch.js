// Circle Hunt
// Click balloons to destroy them before time runs out.
// Get a High Score.

let canvasSize = 600;
let currentScene = 1;
let gameTimer = 0;
let ellipseCount = 0; // number of ellipses clicked

let ellipseX;
let ellipseY;
let ellipseSize; 

function setup() {
  createCanvas(canvasSize, canvasSize); 
}

//state change?
function draw() {

   background(0);
   
   
   if (currentScene == 1) 
   {
     print(currentScene);
     scene1();
   } 
   else if (currentScene == 2)
   {
     scene2();
   } 
   else if (currentScene == 3) 
   {
     scene3();
   }
   
   //print(currentScene);

}

//level logic
function scene1() {
  ellipseCount = 0;
  background("WHITE");
  textAlign(CENTER);
  textSize(50);
  text("Balloon Clicker", 300, 300);
}

function scene2() {
  background("BLACK");
  
  ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);

  let currentTime = millis();
  if (currentTime > gameTimer + 10000) {
    currentScene = 3;
  }
  //check for the time the game started, if current time is x seconds past that, end the game
  
}

function scene3 () {
  background("WHITE");
  textAlign(CENTER);
  textSize(50);
  fill('GREEN');
  text("It's Over!", 300, 300);
  text("You popped" +  ellipseCount  + "balloons!", 300, 450);
}

//starts the thing
function keyPressed() {
  if (key == 'a') {
    currentScene = 2;
    gameTimer = millis();
    ellipseX = random(10,590);
    ellipseY = random(10,590);
    ellipseSize = random(50,250);
  }

  if (key == 'b' && currentScene == 3) {
    currentScene = 1;
  }
}

//destroys 1 balloon
function mousePressed() {

  if (dist(mouseX, mouseY, ellipseX, ellipseY) <= ellipseSize * 0.5 && currentScene == 2) {

    ellipseCount = ellipseCount + 1;
    fill(random(0,255),random(0,255),random(0,255));
    ellipseX = random(10,590);
    ellipseY = random(10,590);
    ellipseSize = random(50,250);

  }
}