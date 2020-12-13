
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobOj1;

function preload()
{	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobOj1=new Bob(300,690,50,50)
bobOj2=new Bob(400,690,50,50)
bobOj3=new Bob(500,690,50,50)
bobOj4=new Bob(600,690,50,50)
bobOj5=new Bob(700,690,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



