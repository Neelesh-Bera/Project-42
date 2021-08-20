var iss_img, space_img, spacecraft_img, spacecraftUp_img, spacecraftRight_img, spacecraftLeft_img;
var spacecraft, iss;
var hasDocked = false;

function preload() {
  iss_img = loadImage("images/iss.png");
  space_img = loadImage("images/spacebg.jpg");
  spacecraft_img = loadImage("images/spacecraft1.png");
  spacecraftUp_img = loadImage("images/spacecraft2.png");
  spacecraftRight_img = loadImage("images/spacecraft3.png");
  spacecraftLeft_img = loadImage("images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft_img);
  spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale = 0.25;

}

function draw() {
  background(space_img);
  spacecraft.addImage(spacecraft_img);

if(!hasDocked){
  spacecraft.x = spacecraft.x+random(-1,1);
}

if(keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-2;
  spacecraft.addImage(spacecraftLeft_img);
}

if(keyDown("RIGHT_ARROW")){
  spacecraft.x = spacecraft.x+2;
  spacecraft.addImage(spacecraftRight_img);
}

if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y-2;
  spacecraft.addImage(spacecraftUp_img);
}

if(keyDown("DOWN_ARROW")){
  spacecraft.y = spacecraft.y+2;
  spacecraft.addImage(spacecraft_img);
}



  /*if(spacecraft.y <= (iss.y+180 && spacecraft.x) <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 200);
  }

  if(spacecraft.y <= (iss.y-70 && spacecraft.x) <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300);
  }
*/
  if(spacecraft.y <= (iss.y+70) && spacecraft.x >= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300);
  }
/*
  if(spacecraft.y <= (iss.y+70 && spacecraft.x) <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300);
  }
  

  */drawSprites();


}