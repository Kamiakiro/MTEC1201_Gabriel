function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);

  //State 1
  if (key = "a") {
    background("blue");
    fill(0,0,0);
    text("It's 2:00 AM. I know this since I'm the kind of color associated with 2 AM.");
  }

  //State 2
  if (key = "b") {
    background("orange");
    fill(0,0,0);
    text("Yeah, that blue guy? He's lying. He's not ACTUALLY the color of 2 AM, he just liked being associated with it.");
  }

  //State 3
  if (key = "c") {
    background("green");
    fill(0,0,0);
    text("I just got myself a nice paycheck. 20 bucks an hour, working from 9-10. You WISH you had the stacks I do.");
  }
}

function keyPressed() {
  if (keyIsPressed = "a") {
    key = "a";
  }
  if (keyIsPressed = "b") {
    key = "b";
  }
  if (keyIsPressed = "c") {
    key = "c";
  }
}