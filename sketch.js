const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3, paper, ground
var world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 670, 800, 10);
	paper = new Paper(100, 200, 20);
	dustbin1 = new Dustbin(700,600,20,100);
	dustbin2 = new Dustbin(620,655,150,20);
	dustbin3 = new Dustbin(540,600,20,100);


// 	dustbin === ground(width/2,670,width,20);

// 	Create the Bodies Here.
// 	var render = Render.create((
// 	element: document.body,
// 	engine: engine,
// 	options: {
// 	width: 1200,
// 	height: 700,
// 	wireframes: false
// 	}
// ));

	Engine.run(engine) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display(); 
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
	}
}

