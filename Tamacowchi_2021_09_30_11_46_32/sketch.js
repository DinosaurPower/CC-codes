let timer = 100;
let timer2 = 300;
let timer3 = 100;
 let s = 0;
let b = 0;
let t = 0;
 let button;


function setup() {
  createCanvas(400, 450);
//let h = hour();
 //this code wouldn't be possible without https://processing.org/reference/inequality.html
 // let f = 0;
    // f += 0.1;
 
}

function draw() {
 //starting counting seconds
let sec = second();

  
 
  background("#FFbfbf");
  push();
  blendMode(BURN);
  fill(200);
   ellipse (190, 320, 220, 100);
  pop();
    cow(270, 200);
     
 
    
  fill("#FF8888")
    text(timer3, 350, 30);
  text(timer, 350, 50);
   text(timer2, 350, 70);

   
   textSize(22);
  text('Cow hunger:', 180, 70);
   text('Cow thirst:', 180, 50);
  text('Cow happiness:', 180, 30);
  
   button = createButton('feed');
  button.position(210, 400);
  button.mousePressed(Food);
  
   button = createButton('water');
  button.position(150, 400);
  button.mousePressed(Water);
  
   button = createButton('play');
  button.position(100, 400);
  button.mousePressed(Play);
  
  
  
  //thirst timer
  if (sec != s){
    timer --;
    s = sec;  
  }
  if (timer == 0 || timer<0 ) { 
    cowLeft(200, 200);
    timer = 0;   
  }     
  if (timer>500) {
      Heart(50, 200);  
  }
  
  //will fix this one later
 //if(f<10){f++;
  //       } else if(f==10){f--;
    //                       }
  
  ////hungerr
          if (sec != t){
    timer3 --;
    t = sec;   
  }
  if (timer3 == 0 || timer3<0 ) {
   cowLeft(200, 200);
    timer3 = 0;    
  } 
  if (timer3>500) {
       Heart(50, 165);  
   
  }           
  //happiness
 if (sec != b){
    timer2 --;
    b = sec;   
  }
  if (timer2 == 0 || timer2<0 ) {
    cowLeft(200, 220);
    timer2 = 0;
    
  }
   
 
  if (timer2>500) {
      Heart(50, 130);  
   
   
  }   
 
  
}

function cow(x, y){
//back front leg
  noStroke();
  fill("#ffec73");
  beginShape();
  vertex(x-140, y+90);
   vertex(x-160, y+120);
   vertex(x-170, y+120);
   vertex(x-180, y+70);
  endShape(CLOSE);
  //back back leg
  beginShape();
  vertex(x-10, y+90);
   vertex(x-20, y+120);
   vertex(x-30, y+120);
   vertex(x-50, y+70);
  endShape(CLOSE);
  
  fill("#FF9999");
  
  
  
  //cow boob
  beginShape();
   curveVertex(x-45, y+60);
  curveVertex(x-20, y+90);
  curveVertex(x-45, y+110);
  curveVertex(x-70, y+90); 
  endShape(CLOSE);
  ellipse(x-30, y+105, 10);
   ellipse(x-60, y+105, 10);
  
fill("#FFFF99");
  //body
  beginShape();
  vertex(x-170, y-100);
  vertex(x-110, y-100);
  vertex(x-100, y-50);
    vertex(x, y-50);
    vertex(x+20, y+40);
    vertex(x+10, y+120);
    vertex(x, y+120);
    vertex(x-20, y+90);
   vertex(x-130, y+90);
   vertex(x-140, y+120);
   vertex(x-150, y+120);
   vertex(x-160, y+90);
   vertex(x-180, y+70);
  vertex(x-180, y-10);
  endShape(CLOSE);
  //left ear
  beginShape();
  curveVertex(x-170, y-90);
  curveVertex(x-190, y-95);
  curveVertex(x-190, y-75);
  curveVertex(x-170, y-70)
  endShape(CLOSE);
  
 // right ear
  beginShape();
  curveVertex(x-110, y-90);
  curveVertex(x-90, y-95);
  curveVertex(x-90, y-75);
  curveVertex(x-110, y-70)
  endShape(CLOSE);

  
  //tail
 
beginShape();
   vertex(x, y-50);
  vertex(x+40, y);
   vertex(x, y-30);
  endShape(CLOSE);
  //spot
  
   fill("#ffec73");
   
  beginShape();
  vertex(x-100, y-50);
    vertex(x, y-50);
    vertex(x+10, y);
    vertex(x, y+10);
   vertex(x-60, y);
   vertex(x-100, y-20);  
  endShape(CLOSE);
  
  beginShape();
    vertex(x+40, y);
    vertex(x+50, y-5);
    vertex(x+70, y+10);
   vertex(x+45, y+10);
  
  endShape(CLOSE);
  
  //horns
  fill("#FF9999");
   beginShape();
  vertex(x-170, y-90);
  vertex(x-180, y-110);
    vertex(x-160, y-140);
  vertex(x-165, y-115);
    vertex(x-150, y-100);
  endShape(CLOSE);
  beginShape();
  vertex(x-110, y-90);
  vertex(x-100, y-110);
    vertex(x-120, y-140);
  vertex(x-115, y-115);
    vertex(x-130, y-100);
  endShape(CLOSE);
  
  //snout
  beginShape();
  curveVertex(x-150, y-70);
  curveVertex(x-140, y-68);
  curveVertex(x-130, y-70);
   curveVertex(x-125, y-60)
  curveVertex(x-130, y-50)
   curveVertex(x-150, y-50)
   curveVertex(x-155, y-60)
   curveVertex(x-150, y-70);
  endShape(CLOSE);
  
  fill(0);
  circle(x-160, y-70, 10);
   circle(x-120, y-70, 10);

   
}


function cowLeft(x, y){
  
  push();
  rectMode(CENTER);
  textAlign(CENTER);
    fill("#FFbfbf");
  rect(200, 225, 300, 300);
   rect(120, 70, 100, 50);
  push();
  blendMode(BURN);
  fill(200);
   ellipse (x, 350, 50, 15);
  pop();
  
  fill("#ffec73")
    rect (x,y+100, 20, 100)
   fill("#FFFF99")
 rect (x,y, 150, 100)
  fill("#FF8888")
  text('Cow left', x, y)
  textSize(10);
  text('but promised to return', x, y+15)
  pop();
}
  
  function Heart(x, y){
    beginShape();
    fill("#FF9999")
     vertex(x+25, y+10);
     vertex(x+25, y-5); 
    vertex(x+20, y-10);
    vertex(x+10, y-10);
    vertex(x, y);
    vertex(x-10, y-10);
    vertex(x-20, y-10);
    vertex(x-25, y-5);
     vertex(x-25, y+10);
    vertex(x, y+30);
    endShape(CLOSE);
    
  

  
}
function Food(){
timer3=timer3+30;
}
function Water(){
timer= timer+15;
}
function Play(){
timer2= timer2+50;
  
  
}




  


