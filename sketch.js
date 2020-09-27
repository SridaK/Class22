const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ourEngine,ourWorld;
var ground, ball;
function setup() {
  createCanvas(400,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  var ground_options={//JSON
    isStatic:true
  }
  ground=Bodies.rectangle(200, 390, 400, 50,ground_options);
  World.add(ourWorld,ground);
  //console.log(object);
  var ball_options = {
    restitution: 1.0
  }
  ball=Bodies.circle(200, 100, 50, ball_options)
  World.add(ourWorld, ball);
  
}

function draw() {
  background("blue");  
  rectMode(CENTER);
  Engine.update(ourEngine);
  rect (ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 50, 50)
}