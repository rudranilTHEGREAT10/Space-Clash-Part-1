var spaceShip
var missile
var bg
var ufo

function preload(){

bg2 =loadImage("bg.jpg")
spaceShip1=loadImage("spaceship.png")
missile1=loadImage("missile.png")
ufo1=loadImage("ufo.png")

}


function setup() {

  createCanvas(1250,500);

  bg=createSprite(0,0,1250,500)
bg.addImage(bg2)
bg.x=bg.width/2
bg.velocityX=-4


missile=createSprite(200,150,20,20)
missile.addImage(missile1)
missile.scale=0.1


 spaceShip=createSprite(200,150,50,10)
 spaceShip.addImage(spaceShip1)
 spaceShip.scale=0.3


 
 ufosGroup=new Group()

}

function draw() {
  background(0); 
  
  bg.velocityX=-2

  if (bg.x < 500){
    bg.x = bg.width/2;
  }
  
  
  if(keyDown("Space")){
    missile.velocityX=5
  }


  
  
  
spawnObstacles()

  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0) {
    var ufo = createSprite(1200,50,10,10);
    ufo.y = Math.round(random(50,250));
    ufo.addImage(ufo1);
    ufo.scale = 0.3;
    ufo.velocityX = -3;
    
    ufo.lifetime = 500;
    
  
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    
    ufosGroup.add(ufo);
    
  }
}
