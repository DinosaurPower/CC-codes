let a, z;

let r;
let c;
let t;
let b;
let colors = ['#ff7cff', '#ffb89c', '#ffc091', '#ffaf7d'];
let blue = ['#85d6ae', '#777777', '#a3bef0'];
 let value = 0;
let d;
let tip = 0;
 


function setup() {
  createCanvas(462, 462);
  //randomizing pigeon color
  r = random(0, 255);
  c = random(colors);
  t = random(blue);
  d = random (0, 1);
  
  //making some pigeon naming things
  //reference: https://p5js.org/examples/dom-input-and-button.html
  input = createInput();
  input.position(20, 15);

  button = createButton('submit');
  button.position(input.x + input.width, 15);
  button.mousePressed(greet);

  greeting = createElement('h3', 'Create your pigeon!');
  greeting.position(10, 400);

  textAlign(LEFT);

  
  
}


function draw() {
  background(240);

  

  
 //making cool square array
push();  
  for(var i= 0; i < width; i+=22){
 for (var a= 0; a < height; a+=22){
   noStroke();
   fill("#cccccc");
   rect(i, a, 20, 20);
 }
  } 
  pop();
  

  
 //pigeon shadow  
  push();
  noStroke();
  blendMode(MULTIPLY);
    fill(170);
  ellipse(220, 280+(mouseY/10), 50+(mouseX/7), 20+(mouseY/40))  
  pop();
 

  
  //pigeon leggs
   fill(c);
  rect(215, 260+(mouseY/15), 5, 25+(mouseY/50), 2);
  if (d > 0.5) {
      console.log('positive');
    rect(225, 260+(mouseY/15), 5,(25+(mouseY/50)), 2);
} 

  



  

  
   //pigeon lego
  fill(r);
  pigeon(200, 200);
  wing(200, 200);
    fill(value);
  push();
  noStroke();
  stripe(200, 200);
  pop();
  
  push();
  fill(tip);
  noStroke();
  tipp(200, 200);
  
  pop();

  //fancy colored neck
  push();
    fill(t);
  blendMode(MULTIPLY);
  neck(200, 200);
  pop();

  
 
    //itty bitty pigeon eyes
      fill ("#FFFF55");
  ellipse(205, 210-(mouseY/10), 10, 10);
    ellipse(220, 210-(mouseY/10), 10, 10);
 //eye pupils
  push();  
  fill("#000000");
  noStroke();
  ellipse(203, 210-(mouseY/10), 2, 2);
    ellipse(220, 210-(mouseY/10), 2, 2);
  pop();
  
  //itty bitty beak
  push();
  translate(200, 220-(mouseY/10));
   fill(c);
  triangle (2, 1, 10, -10, 12, -2); 
  pop();
  
  function tipp(x, y){   
    beginShape();
     vertex(x+45+(mouseX/9), y+50+(mouseY/11));
 vertex(x+65+(mouseX/7), y+40+(mouseY/11));
    vertex(x+60+(mouseX/9), y+40+(mouseY/11));
    vertex(x+40+(mouseX/9), y+40+(mouseY/11));
  endShape(CLOSE);
  }
  
  //pigeon lego details
  function wing(x, y){
    beginShape();
    vertex(x+15-(mouseX/100), y+45+(mouseY/10));
       vertex(x+12+(mouseX/100), y+55+(mouseY/10));
     vertex(x+15+(mouseX/10), y+60+(mouseY/10));
         vertex(x+45+(mouseX/9), y+60+(mouseY/11));
 vertex(x+65+(mouseX/7), y+40+(mouseY/11));
    vertex(x+20+(mouseX/10), y+30+(mouseY/11));    
    endShape(CLOSE);    
  }
  
  function stripe(x, y){
   beginShape();
     vertex(x+25+(mouseX/10), y+59+(mouseY/10));
         vertex(x+40+(mouseX/9), y+58+(mouseY/10));
           vertex(x+25+(mouseX/9), y+32+(mouseY/11));
    vertex(x+20+(mouseX/10), y+30+(mouseY/11)); 
     endShape(CLOSE);     
  }
  
  function pigeon(x, y){   
     beginShape();
    vertex(x+10-(mouseX/10), y-(mouseY/10));
  vertex(x-(mouseX/10), y+40+(mouseY/11));
    vertex(x+10-(mouseX/10),y+60+(mouseY/10));
    vertex(x+15+(mouseX/10), y+65+(mouseY/9));
    vertex(x+45+(mouseX/9), y+60+(mouseY/11));
  vertex(x+65+(mouseX/7), y+45+(mouseY/11));
  vertex(x+20+(mouseX/10), y+30+(mouseY/11));
     vertex(x+20+(mouseX/10), y-(mouseY/12));
  vertex(x+15, y-5-(mouseY/11));
  endShape(CLOSE);   
  }
  
  function neck(x, y){
      beginShape();
     vertex(x+5-(mouseX/10), y+20);
    vertex(x+7-(mouseX/10), y+25-(mouseY/11));
     vertex(x+20+(mouseX/10), y+25-(mouseY/11));
       vertex(x+20+(mouseX/10), y+20);
        endShape(CLOSE);    
  }  
}


 //changing stripe color
function mouseClicked() {
  if (value === 0) {
    value = r;
  } else {
    value = 0;
  }
}

//making pigeon name function 
function greet() {
  const name = input.value();
  greeting.html('Your pigeons name is ' + name + '!');
  input.value('');



}

function keyPressed(SHIFT){

  fill(0);
    textSize(12);
  translate(0, 20);
  textAlign(RIGHT);
  text('space to control wing tip', 450, 400);
   text('mouse click to control stripe', 450, 410);
   text('mouse move to choose size', 450, 420);
  textSize(10);
 
}

  


