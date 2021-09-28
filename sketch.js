let head1, head2, head3, head4, head5, body1, body2, body3, body4, tent1, tent2, tent3, tent4, tent5;
let r1, r2, r3;
let x, y, x1, y1;
let n1 = [1, 2, 3, 4, 5];
let n2 = [1, 2, 3, 4];
let name1 = ["Dmi", "Pyo","Ma","Al","Po", "Ta", "Me", "Sol"];
let name2 = ["tri", "ter","Kar","isa","lina", "ras", "lashka", "omia"];
let noun = ["He works as ", "She works as ", "They work as "];
let job = ["priest.", "blacksmith.", "cook.", "shepherd.", "farmer.", "warrior.", "monarchy.", "artist.", "scientist.", "doctor.", "alchemist.", "teacher."];


function preload(){
  
  head1 = loadImage("Head1.png");
   head2 = loadImage("Head2.png");
   head3 = loadImage("Head3.png");
   head4 = loadImage("Head4.png");
   head5 = loadImage("Head5.png");
   body1 = loadImage("Body1.png");
   body2 = loadImage("Body2.png");
   body3 = loadImage("Body3.png");
   body4 = loadImage("Body4.png");
 tent1 = loadImage("Tentacle1.png");
  tent2 = loadImage("Tentacle2.png");
  tent3 = loadImage("Tentacle3.png");
  tent4 = loadImage("Tentacle4.png");
  tent5 = loadImage("Tentacle5.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
 r1 = random(n1);
   r2 = random(n2);
   r3 = random(n1);
  na1 = random(name1);
  na2 = random(name2);
  no = random(noun);
  jobb = random(job);
}

function draw() {
  background(5, 0, 10);
 
  body(0, 155, 350, 200);
  head(0, 0, 350, 200);
    tentacle(0, 305, 350, 250);
  push();
  fill("#3b1c5e");
rotate(PI/2);
  textSize(20);
  text('Your insectoctoids name is '+na1+na2+'. ' +no+jobb, 10, -360);
  pop();
 
  
}

function head(x, y, x1, y1){
  
  if (r1==1){
    image(head1, x, y, x1, y1);
  } else {if (r1==2){
    image(head2, x, y, x1, y1);
  }else {if (r1==3){
    image(head3, x, y, x1, y1);
  }else {if (r1==4){
    image(head4, x, y, x1, y1);
  }else{image(head4, x, y, x1, y1)}
        }}} 
  
  
}
function body(x, y, x1, y1){
  
  if(r2==1){
    image(body1, x,y, x1, y1);
  } else {if(r2==2){
    image(body2, x,y, x1, y1);
  }else {if(r2==3){
    image(body3, x,y, x1, y1);
  }else{image(body4, x,y, x1, y1)}
        }} 
}
function tentacle(x, y, x1, y1){
  
  if (r3==1){
    image(tent1, x, y, x1, y1);
  } else {if (r3==2){
    image(tent2, x, y, x1, y1);
  }else {if (r3==3){
    image(tent3, x, y, x1, y1);
  }else {if (r3==4){
    image(tent4, x, y, x1, y1);
  }else{image(tent4, x, y, x1, y1)}
        }}} 
}