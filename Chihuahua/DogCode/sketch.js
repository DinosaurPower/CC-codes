let i;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background("#d5ddff");
  
  if (mouseY > 165) { i=mouseY;
                   } else{ i=175;}

    noStroke();

  

//back back paw
beginShape();
vertex(210, 200);
  vertex(200, 235);
    vertex(210, 270);
    vertex(205, 300);
vertex(215, 300);
   vertex(245, 250);
  vertex(245, 200);
  fill("#000000");
  
endShape(CLOSE);
  
  //front back paw
  beginShape();
vertex(120, 225);  
    vertex(150, 260);
    vertex(150, 300);
vertex(160, 300);
   vertex(165, 260);
     vertex(165, 250);
   
  fill("#000000");
  
endShape(CLOSE);

  //body
beginShape();
vertex(130, 150);
  vertex(120, 225);
    vertex(140, 260);
    vertex(255, 240);
   vertex(260, 180);
  vertex(180, 180);
   vertex(160, 150);
  
  fill("#6e3c18");

  
endShape(CLOSE);
  
    fill("#78421c");
  ellipse (190, 190, 30, 30);
         ellipse (170, 200, 30, 30);   
     ellipse (200, 210, 30, 30);  
       ellipse (210, 190, 30, 30);  
   ellipse (220, 210, 30, 30);
   ellipse (230, 190, 30, 30);
  
  //underbelly
  beginShape();

  vertex(120, 225);
    vertex(140, 260);
    vertex(255, 240);
   vertex(250, 230);
    
  fill("#ffffff");
  
endShape(CLOSE);
  
  //back paw
  beginShape();
vertex(230, 200);
  vertex(210, 235);
    vertex(240, 270);
    vertex(245, 300);
vertex(255, 300);
   vertex(265, 250);
   vertex(256, 230);
  vertex(260, 200);
  fill("#421c00");
  
  
endShape(CLOSE);
  
  //front paw
  beginShape();
vertex(120, 225);  
    vertex(140, 260);
    vertex(135, 300);
vertex(145, 300);
   vertex(160, 260);
   vertex(156, 230);
  vertex(160, 210);
  vertex(140, 200);
  
  fill("#421c00");
  
  
endShape(CLOSE);
  //tail
  triangle(260, 200, 270, 140, 250, 180);
  fill("#6e3c18");
  
  //head
  beginShape();
vertex(90, 120);
  vertex(95, 90);
    vertex(130, 75);
    vertex(120, 120);

  endShape(CLOSE);
  
   beginShape();
vertex(190, 120);
  vertex(190, 75);
    vertex(150, 75);
    vertex(120, 120);

  endShape(CLOSE);

  ellipse(140,130,110,100);

  //eyes
  fill("#e89f92");  
   ellipse(100,145,60,50);
   ellipse(180,145,60,50);
    
  fill("#ffffff");  
   ellipse(100,135,60,50);
   ellipse(180,135,60,50);
  
    fill("#572819");  
   ellipse(100,135,45,40);
   ellipse(180,135,45,40);
  
  fill("#000000");  
   ellipse(100,135,35,30);
   ellipse(180,135,35,30);
  
   fill("#ffffff");  
   ellipse(85,135,20,5);
   ellipse(165,135,20,5);
  
  //ears
  fill("#8a532b");
  triangle(85, 105, 90, 75, 130, 75);
  triangle(195, 105, 150, 75, 190, 75);
   
  
  //muzzle
   fill("#8a532b");  
   ellipse(140,165,50,50);
  fill("#e89f92");  
 
  
 beginShape();
curveVertex(125, 165);
curveVertex(130, i);
  curveVertex(145, i);
  curveVertex(155, 165);
  curveVertex(150, 160);
endShape(CLOSE);

  
  fill("#92592f");  
   ellipse(140,165,40,40);
  
  

   fill("#000000");
ellipse(140,155,15,10);
 

  

}
