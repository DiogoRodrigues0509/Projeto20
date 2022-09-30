
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var block1,block2,block3;
 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}	
	ground = Bodies.rectangle(400,650,800,10,plane_options);
	World.add(world,ground);

	var block1_options = {
		restitution:1,
		friction:0.02,
		frictionAir:0
	}
	block1 = Bodies.circle(400,10,10,block1_options);
	World.add(world,block1);

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	block2 = Bodies.rectangle(70,50,10,10,block2_options);
	World.add(world,block2);

	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	block3 = Bodies.rectangle(700,50,10,10,block3_options);
	World.add(world,block3);

	Engine.run(engine);
	ellipseMode(RADIUS);
	fill('red');
}


function draw() {
  rectMode(CENTER);
  background('green');
  rect(ground.position.x,ground.position.y,800,40);
  rect(block2.position.x,block2.position.y,60,60);
  rect(block3.position.x,block3.position.y,100,50);
  ellipse(block1.position.x,block1.position.y,30);
}



