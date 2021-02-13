const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
var building1,building2,building3,building4,building5,ball,ground;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(200,300,50)
	rope=new Rope(ball.body,{x:200,y:300} )
	building1 = new Building(400,600,50,100)
	building2 = new Building(400,500,50,100)
	building3 = new Building(400,400,50,100)
	building4 = new Building(400,300,50,100)
	building5 = new Building(400,200,50,100)
	ground=new Ground(400,640,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    building1.display();
	building2.display();
    building3.display();
    building4.display();
    building5.display();
	ground.display();
	ball.display();
	rope.display();

  drawSprites();
 
}
function mouseDragged(){
	//rope.pointB={x:mouseX,y:mouseY}
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
	
}
