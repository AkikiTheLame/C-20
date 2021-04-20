var fixedRct, movingRct;

function setup() {
  createCanvas(1200,800);
  fixedRct = createSprite(600, 400, 50, 80);
  fixedRct.shapeColor = "green";
  fixedRct.debug = true;

  movingRct = createSprite(400,200,80,30);
  movingRct.shapeColor = "green";
  movingRct.debug = true;

}

function draw() {
  background(0,0,0);  
  
  movingRct.x = World.mouseX;
  movingRct.y = World.mouseY;
  
  
  if(movingRct.x - fixedRct.x < fixedRct.width/2 + movingRct.width/2 && fixedRct.x - movingRct.x < fixedRct.width/2 + movingRct.width/2
    && movingRct.y - fixedRct.y < fixedRct.height/2 + movingRct.height/2 && fixedRct.y - movingRct.y < fixedRct.height/2 + movingRct.height/2) {
    movingRct.shapeColor = "red";
    fixedRct.shapeColor = "red";
  }

  else {
    movingRct.shapeColor = "green";
    fixedRct.shapeColor = "green";
  }

  drawSprites();

}