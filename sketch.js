
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground,groundImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,400);

  ground=createSprite(400,360,900,40);
  ground.velocityX=-4;
  
  
  monkey=createSprite(100,300,50,50);
  monkey.addAnimation("monkeyrun",monkey_running);
  monkey.scale=0.15;
  FoodGroup= new Group();


}


function draw() {
background(200);
  fill("red");
  text("Score:"+score,225,30);
  
  if(ground.x<100)
  {
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.collide(ground))
  {
    monkey.velocityY=-15
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  if(frameCount%80===0){
  bananaf();
  }
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
  if(frameCount%300===0){
    obstaclef();  
  }
  score = score + Math.round(getFrameRate()/60);
    
  drawSprites();
}

function bananaf(){
  banana=createSprite(550,Math.round(random(20,200)),50,50)
  banana.addImage(bananaImage);
  banana.scale=0.15;
  banana.velocityX=-6;
  banana.lifetime=90;
  FoodGroup.add(banana);
}
function obstaclef(){
  obstacle=createSprite(550,320,50,50);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-8;
  obstacle.scale=0.17;
  obstacle.lifetime=80;
}




