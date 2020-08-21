var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paddle,paddle1,paddle2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	paddle = new Box(400,680,200,20)
	paddle1 = new Box(300,670,100,20)
	paddle2 = new Box(500,670,100,20)

	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);

   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  paddle.display();
  paddle1.display();
  paddle2.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageIMG.velocityY = 0.1;
	Matter.Body.setStatic(packageBody,false) 
	
  }
}



