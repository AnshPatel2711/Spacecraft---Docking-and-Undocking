var iss, issImg, spacecraft, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var bg;
var hasDocked=false;

function preload(){
bg = loadImage("spacebg.jpg");
spacecraft1Img = loadImage("spacecraft1.png");
spacecraft2Img = loadImage("spacecraft2.png");
spacecraft3Img = loadImage("spacecraft3.png");
spacecraft4Img = loadImage("spacecraft4.png");
issImg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale= 1;
  spacecraft = createSprite(280, 240)
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale= 0.15;
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraft1Img);
  if(!hasDocked){
    spacecraft.x+=random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2Img);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x-=1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x+=1;
    }
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}