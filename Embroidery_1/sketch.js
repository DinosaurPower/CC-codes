let a, j, z, e;
let x, y;
let r, w;
let linh, linw;
 


function setup() {
  createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
  background(0);
  z = width;
  e = 0
  rectMode(CENTER);
  

  
  
}


function draw() {

//setting up color change
  e = e+1;
  if (e==360){e=0}
noStroke();
         fill(e, 50, 100);

  
push(); 
  //zigzag for the water flow
  

 
  
  
 for(var i= -120; i < windowWidth; i+=170){
for (var a= 50; a < windowHeight-50; a+=15){

//making happy little rye field
 sewRye(i, a);
        
  //arrows for figurres
   if (keyIsDown(LEFT_ARROW)){
     sewRhumb(mouseX, mouseY);    
   }
  
if (keyIsDown(RIGHT_ARROW)){
  rect(mouseX, mouseY, 20, 20)
}
  
  if (keyIsDown(UP_ARROW)){
  ellipse(mouseX, mouseY, 10, 10)}
  
  
  if (keyIsDown(DOWN_ARROW)){
    push();
    fill(0);
      ellipse(mouseX, mouseY, 5, 5)
  pop();
  }
  
  
  
  //drawing some centurea with mouse
  if (mouseIsPressed) {
   sewFlower(mouseX, mouseY); 
}
  

  //making pattern repeat
  
  z = z - 70;
    if (z < 0) {
    z = width;
  }
   //some traditional framing
      triangle(z-30, 0, z, 30, z+30, 0);
  triangle(z-30, windowHeight, z, windowHeight-30, z+30, windowHeight);
sewRhumb(z+35, windowHeight-20);
  sewRhumb(z+35, 20);

  }  
}
  
  
//making functions
function sewRhumb(x, y){
  beginShape();
  vertex(x, y+15);
  vertex (x+15, y);
  vertex(x, y-15);
  vertex(x-15, y);
  endShape(CLOSE);
}
function sewRye(x, y){

   beginShape()
  vertex(x-10, y-10);
  vertex (x, y);
   vertex (x, y+10);
   vertex (x-10, y);
  endShape(CLOSE);
  beginShape()
    vertex(x+15, y-10);
  vertex (x+5, y);
   vertex (x+5, y+10);
   vertex (x+15, y);
  endShape(CLOSE);
  
}
  function sewFlower(x, y){   
    
 

  beginShape();
  vertex(x-20, y-40);
   vertex(x, y-20);
  vertex(x+20, y-40);
  vertex(x+20, y);
   vertex(x, y+20);
   vertex(x-20, y);
  endShape(CLOSE);
    
   beginShape();
  vertex(x+25, y+5);
   vertex(x+5, y+25);
  vertex(x+25, y+45);
  vertex(x+65, y+45);
   vertex(x+45, y+25);
   vertex(x+65, y+5);
endShape(CLOSE);


   beginShape();
  vertex(x, y+30);
   vertex(x-20, y+50);
  vertex(x-20, y+90);
  vertex(x, y+70);
   vertex(x+20, y+90);
   vertex(x+20, y+50);
  endShape(CLOSE);

     beginShape();
  vertex(x-25, y+5);
   vertex(x-5, y+25);
  vertex(x-25, y+45);
  vertex(x-65, y+45);
   vertex(x-45, y+25);
   vertex(x-65, y+5);
endShape(CLOSE);
 
  }
 
}

function keyPressed() {
  if (key == 'w') {
    sewCross(mouseX, mouseY);
  } else if (key == 'a') {
    sewBirbR(mouseX, mouseY);
  } else if (key == 's') {
 sewDia(mouseY, mouseY);
  } else if (key == 'd') {
   sewBirbL(mouseX, mouseY);
  }
}

 function sewCross(x, y){
    rect(x, y-15, 10, 20);
  rect(x, y+15, 10, 20);
  rect(x-15, y, 20, 10);
    rect(x+15, y, 20, 10);
  }
function sewDia(x, y){
    translate(mouseX, mouseY)
  rotate(PI/4);
  rect(0,-15, 10, 20);
  rect(0, 15, 10, 20);
  rect(-15, 0, 20, 10);
    rect(15, 0, 20, 10);
  }

function sewBirbL(x, y){
  beginShape();
   vertex(x, y);
  vertex (x+10, y);
    vertex (x+20, y+15);
     vertex (x+45, y+15);    
   vertex (x+40, y+25);
  vertex (x+20, y+45);
    vertex (x+5, y+45);
    vertex (x-5, y+30);
  vertex (x-10, y+15);
    vertex (x-15, y+10);
   vertex (x-5, y+5);  
  endShape(CLOSE);
}
function sewBirbR(x, y){
 beginShape()
  vertex(x, y);
  vertex (x-10, y);
    vertex (x-20, y+15);
     vertex (x-45, y+15);    
   vertex (x-40, y+25);
  vertex (x-20, y+45);
    vertex (x-5, y+45);
    vertex (x+5, y+30);
  vertex (x+10, y+15);
    vertex (x+15, y+10);
   vertex (x+5, y+5);  
  endShape(CLOSE);
}