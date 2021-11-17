let video;
let tracker;
let emotion;

function preload(){
  
  concerned=loadImage("RobotoConcerned.png");
  happy=loadImage("RobotoHappy.png");
  sad=loadImage("RobotoSad.png");
  excited = loadImage("RobotoExc.png");
  font= loadFont("aliens and cows_trial.ttf");
  question = loadImage("Text2.png");
}


function setup() {
  createCanvas(windowHeight,windowWidth);
  video=createCapture(VIDEO);
  video.size(600, 500);
  video.hide();
  tracker= new clm.tracker();
  tracker.init();
  tracker.start(video.elt);
  // input = createInput('write your concerns here');
 // input.position(30, windowHeight-180);
//  input.size(windowWidth-60, 90);
  
 
}

function draw(){
  background("#17352f");
  ellipse(windowWidth/2, windowHeight/2+100, windowWidth/3, 50);
  fill(0, 0, 0, 60);
  rectMode(CENTER);
  image(video,20,20, 400, 300);
  noStroke();
  let positions = tracker.getCurrentPosition(); 
  image(question, windowWidth/2+windowWidth/3+50, windowHeight/3, 400, 300);
   textFont(font);
  textSize(25);

  fill("#092417");
  //text("Unluckily, empath robot is underqualified to help you. If you ", 10, windowHeight-20, windowWidth-20, 10);
  
 

  
  
imageMode(CENTER);
  
  if(positions){
 	// image(face1, (positions[62][0]), (positions[62][1]), ((positions[13][0])-(positions[1][0]))*1.75, 500);
    //image(eye2,positions[27][0], positions[27][1] , ((positions[25][0])-(positions[23][0]))*4, ((positions[26][1])-(positions[24][1]))*2);
    //image(eye1,positions[32][0], positions[32][1] , ((positions[25][0])-(positions[23][0]))*4, ((positions[26][1])-(positions[24][1]))*2)
    
    if ((positions[44][1])<(positions[57][1])){
      emotion = 1;
    } else if ((positions[44][1])>(positions[57][1])) {
      emotion = 0;
    } else {
      emotion = 2;
    } 
    
    
    
    switch (emotion) {
    case 0:
        
        image(happy, windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);
        text("heyy, you look supper happy!", windowWidth/2+windowWidth/3+70, windowHeight/3+30, 300, 200);
        
        break;
        
        case 1:
        
          image(sad, windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);
        text("you look quite sad. what is concerning you today?", windowWidth/2+windowWidth/3+70, windowHeight/3+30, 300, 200);
        
        break;
        
        case 2:
         image(excited, windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);
        text("i am unable to read this emotion, but still happy to be here with you");
        
        break;
        
    }
        
    
 	 
    
  } else {
    image(concerned, windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);
    
    text("hey! my name is Ha-Pi, i am a first empath robot! i am still learning about emotions, so may be incorrect!", windowWidth/2+windowWidth/3+70, windowHeight/3+30, 300, 200);
      
    }
  //text ("fancyficator 3000", )
  //image(fancy, 170, 100);
 
}