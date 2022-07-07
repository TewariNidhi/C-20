
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ground, ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic : true
  }

  var ball_option = {
    
     restitution : 1,
     frictionAir : 0.01
  }


  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
  console.log(ground);
  console.log(ground.position);

  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(world, ball);



}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("red");
  rectMode(CENTER);
 // rect(200, 200, 50, 50)
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

 
}

