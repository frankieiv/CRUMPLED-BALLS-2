
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin2 = new dustbin(750,650)
	paper2 = new paper(100,450,40)
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(256);
  dustbin2.display()
  paper2.display()
  fill("pink")
  rect(ground.position.x, ground.position.y, width,20)
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paper2.body,paper2.body.position,{x:85,y:-85});
		 } 
}


