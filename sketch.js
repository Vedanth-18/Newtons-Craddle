
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6;
var roof;
var chain1, chain2, chain3, chain4, chain5, chain6;
var bgImg, Img1, Imh2, Img3, Img4;


function preload(){
	bgImg = loadImage("bg.png");
	Img1 = loadImage("Img1.png");
	Img2 = loadImage("Img2.png");
}

function setup() {
	createCanvas(1400,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(550, 500, 50,);
	bob2 = new Bob(100, 500, 50);
	bob3 = new Bob(650, 500, 50);
	bob4 = new Bob(750, 500, 50);
	bob5 = new Bob(850, 500, 50);
	bob6 = new Bob(950, 500, 50);
	bob7 = new Bob(1050, 500, 50);
	bob8 = new Bob(1150, 500, 50);

	roof = new Roof(700, 150);

	chain1 = new Chain(bob1.body ,roof.body, -150,0);
	chain2 = new Chain(bob2.body, roof.body,-250,0);
	chain3 = new Chain(bob3.body, roof.body,-50,0);
	chain4 = new Chain(bob4.body, roof.body,50,0);
	chain5 = new Chain(bob5.body, roof.body,150,0);
	chain6 = new Chain(bob6.body, roof.body,250,0);
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  roof.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();

  console.log(bob2.body.position.x);
   
  ApplyForce();
  drawSprites();
  imageMode(CENTER);
  image(Img1, 150, 540, 500, 700);
  image(Img2, 680, 60, 500, 200);
  push();
  fill("white");
  textStyle(BOLD);
  textFont("Verdana");
  textSize(35);
  text("NEWTON'S CRADLE", 12, 50);
  pop();
  fill("white");
  textStyle(BOLD);
  textFont("Verdana");
  text("Use Left and Right Arrow keys to move the bob", 990, 10);
}

function ApplyForce(){
	if(keyWentDown(LEFT_ARROW)){
        Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-0.3, y:0});
	}
	if(keyWentDown(RIGHT_ARROW)){
        Matter.Body.applyForce(bob2.body, bob2.body.position, {x:0.3, y:0});
	}
}



