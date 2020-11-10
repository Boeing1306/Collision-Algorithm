var fixedRect, movingRect;
var gOb1, gOb2, gOb3, gOb4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,300,50,70);
  movingRect = createSprite(400,100,70,80);

  gOb1 =createSprite(100,100,70,70);
  gOb2 =createSprite(300,100,70,70);
  gOb3 =createSprite(500,100,70,70);
  gOb4 =createSprite(700,100,70,70);


  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gOb1.shapeColor = "green";
  gOb2.shapeColor = "green";
  gOb3.shapeColor = "green";
  gOb4.shapeColor = "green";

  fixedRect.debug =true;
  movingRect.debug = true;

  gOb1.velocityX = 3;
  gOb4.velocityX = -3;
  
  /*fixedRect.velocityX = -3;
  movingRect.velocityX= 3;
*/
  //fixedRect.velocityY = -3;
  //movingRect.velocityY = 3;
  
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

  if(isTouching(movingRect, gOb3)){
    movingRect.shapeColor = "blue";
    gOb3.shapeColor = "blue";
    gOb1.y = 300;
  }
  else{
    movingRect.shapeColor = "green";
    gOb3.shapeColor = "green";
  }

  bounceOff(gOb1, gOb4);
  drawSprites();
}

