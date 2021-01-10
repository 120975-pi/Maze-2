
var canvas;

var player

var playerImage

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21

function preload(){
  playerImage = loadImage("Player_Character_Level_1-removebg-preview.png");
}


function setup(){
  canvas = createCanvas(600,660);
  player = createSprite(265,60,40,40);
  player.addImage("playerImage", playerImage)
  player.scale = 0.3

//player.debug = true;

 wall1 = createSprite(300, 100, 3, 100);
 wall2 = createSprite(400, 350, 3, 200);
 wall3 = createSprite(300, 400, 3, 100);
 wall4 = createSprite(200, 300, 3, 100);
 wall5 = createSprite(100, 100, 3, 100);
 wall6 = createSprite(200, 500, 3, 100);
 wall7 = createSprite(400, 600, 3, 100);
 wall8 = createSprite(500, 500, 3, 100);

 wall9 = createSprite(250, 150, 100, 3);
 wall10 = createSprite(500, 150, 200, 3);
 wall11 = createSprite(100, 250, 200, 3);
 wall12 = createSprite(400, 250, 200, 3);
 wall13 = createSprite(200, 350, 200, 3);
 wall14 = createSprite(500, 350, 200, 3);
 wall15 = createSprite(300, 550, 400, 3);

 wall16 = createSprite(0, 350, 3, 700);
 wall17 = createSprite(700, 350, 3, 700);
 wall18 = createSprite(100, 50, 200, 3);

 wall19 = createSprite(450, 50, 300, 3);

 wall20 = createSprite(150, 650, 300, 3);

 wall21 = createSprite(500, 650, 200, 3);

}


function draw(){

  background("white");
  
if(keyDown(UP_ARROW)){
  player.velocityX = 0;
  player.velocityY = -2;
}
  
if(keyDown(DOWN_ARROW)){
  player.velocityX = 0;
  player.velocityY = 2;
}

if(keyDown(LEFT_ARROW)){
  player.velocityX = -2;
  player.velocityY = 0;
}

if(keyDown(RIGHT_ARROW)){
  player.velocityX = 2;
  player.velocityY = 0;
}

if(player.isTouching(wall1 || wall2 || wall3 || wall4 || wall5 || wall6 || wall7 || wall8 || wall9 || wall10 || wall11 || wall12 || wall13 || wall14 || wall15 || wall16 || wall17 || wall18 || wall19 || wall20 || wall21)){
  player.velocityX = 0;
  player.velocityY = 0;
  
  text("Game Over", 300,315);
  textSize(10);
  
}

drawSprites();
  
}
