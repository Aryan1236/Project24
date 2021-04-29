
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(3000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,700,5000,20);
	log1 = new Hammer(900,200,5,-PI/2);
	box1 = new Box(800,300+20,50+20,50+20);
	box2 = new Box(500,330,50,70);
	circle = new Pig (500,250,50);
    circle2 = new Pig (520,250,10);
	circle3 = new Pig (540,250,10);
	circle4 = new Pig (560,250,10);
	circle5 = new Pig (580,250,10);
	circle6 = new Pig (585,250,10);
	circle7 = new Pig (590,250,10);
	circle8 = new Pig (595,250,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  log1.display();
  box1.display();
  box2.display();
  circle.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  drawSprites();
  
  console.log(mouseX.mouseY);
}



