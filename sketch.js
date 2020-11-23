var fixedRect,movingRect;
var ob1, ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug=true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "yellow";
  movingRect.debug=true;

  ob1 = createSprite(100, 100, 30, 30);
  ob1.shapeColor = "purple";
  ob1.debug=true;

  ob2 = createSprite(500, 100, 30, 30);
  ob2.shapeColor = "white";
  ob2.debug=true;

  ob3 = createSprite(800, 100, 30, 30);
  ob3.shapeColor = "pink";
  ob3.debug=true;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }

  if(isTouching(movingRect,ob2)){
    fill("red");
    text("Yes OB2 and movingRect are touching",600,300);
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 && 
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2 ){

    //boolean values - true / false
    return true;
  }
  else{
    return false;
  }
}