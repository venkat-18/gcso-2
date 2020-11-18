var car,wall;
var speed,weight;
function setup() {
  createCanvas(1250,400);
  speed=random(55,90);
  weight=random(400,1500);
 car= createSprite(50, 200, 90, 50);
 wall=createSprite(1170,200,60,200);
 wall.shapeColor="yellow";
}

function draw() {
  background("blue");  
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180&&deformation>100){
      car.shapeColor="orange";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}