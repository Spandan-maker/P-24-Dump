
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var rod1, rod2, rod3
var paper

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	rod1 = new Rod(933, 330, 15, 110);
	rod2 = new Rod(1000, 380, 150, 15);
	rod3 = new Rod(1067, 332, 15, 110);

	paper = new Paper(200,300,25);

	ground = new Ground(600,400,1200,20);
 
	Engine.run(engine);
  
}


function draw() {
	background(0);

	//Engine.update(engine);

	rod1.display();
	rod3.display();
	rod2.display();

	paper.display();
	
	ground.display();

	paper.x = paper.body.position.x;
  	paper.y = paper.body.position.y;

	shoot();
	
  	drawSprites();
 
}

function shoot(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 1, y : -2});
	}
}

