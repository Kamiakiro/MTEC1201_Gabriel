function setup() {
  createCanvas(400, 400);
 

}

function draw() {
 background(220); 

  strokeWeight(10);
  
  line(0,mouseY,400,mouseY);
  
  line(mouseX,0,mouseX,400);

  line(200,200,mouseX,mouseY);
  
  ellipse(mouseX,mouseY,50,50);
  
}
//line(200,0,200,400);

  

 


