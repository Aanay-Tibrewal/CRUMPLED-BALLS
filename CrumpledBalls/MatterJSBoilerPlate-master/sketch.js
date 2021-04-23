
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 = new Box (1200,640, 20,100);
box2 = new Box (1100,660, 200,20);
box3 = new Box (1000,640, 20,100);
ball = new Ball(300,670,20);
ground = new Ground(750,680,1500,20);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
 
 
}

function keyPressed() {
	 if (keyDown(UP_ARROW)) {
		  Matter.Body.applyForce(ball.body,ball.body.position,{
			  x:0.1,
			  y:-0.04
			}); 
		}
	 }



