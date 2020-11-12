var bullet;
var wall;
var speed;
var weight;
var thickness;



function setup() {
  createCanvas(1600,400);

bullet = createSprite(140,220,60,10)
bullet.shapeColor = "white"

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color (80,80,80);

speed = random(223,321);

weight = random(30,52);

thickness = random(22,83)

}

function draw() {
  background(0);  

  bullet.velocityX = speed;

 if (hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
  wall.shapeColor = color(255,0,0)
}

if (damage<10){
  wall.shapeColor = color(0,255,0)
}
 }

  drawSprites();
}

function hasCollided(bullet,wall) {
  
bulletRightedge = bullet.x + bullet.width;
wallLeftedge = wall.x;

if(bulletRightedge>=wallLeftedge){
return  true;
}
return false;

}



