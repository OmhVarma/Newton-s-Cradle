
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    roof1 = new Roof(382.5,100,400,25);

	bob1 = new Bob(220,500,80);
	bob2 = new Bob(300,500,80);
	bob3 = new Bob(380,500,80);
	bob4 = new Bob(460,500,80);
	bob5 = new Bob(540,500,80);

	rope1 = new Rope(bob1.body,roof1.body,-165,0);
	rope2 = new Rope(bob2.body,roof1.body,-85,0);
	rope3 = new Rope(bob3.body,roof1.body,-5,0);
	rope4 = new Rope(bob4.body,roof1.body,75,0);
	rope5 = new Rope(bob5.body,roof1.body,155,0);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  drawSprites();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  k();
}

function k(){
	if(keyDown("space")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:10,y:-10});
	}
}



