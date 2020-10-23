var rec1, rec2, object, a1,a2

function setup() {
  createCanvas(800,400);
  rec1 = createSprite(400, 200, 130, 50);
  rec2 = createSprite(520,250,30,80)
  rec1.shapeColor = "yellow"
  rec2.shapeColor = "yellow"
  object = createSprite(430,100,30,80)
  a1 = createSprite(130,70,30,80)
  a2 = createSprite(630,70,30,80)
  a1.velocityX = +5
  a2.velocityX = -5
}


function draw() {
  background(255,255,255);  
rec1.x = mouseX
rec1.y =mouseY 

if(touch(rec1,object)){
  rec1.shapeColor = "red"
  object.shapeColor = "red"
}
else{
  rec1.shapeColor = "yellow"
  object.shapeColor = "yellow"
}bounce(a1,a2)
  drawSprites();
}

