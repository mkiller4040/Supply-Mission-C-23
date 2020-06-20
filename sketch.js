var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

var world;
var boxBottom;

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxBottom = createSprite(400,650,200,20);
	boxBottom.shapeColor = "red";

	boxLeftSide = createSprite(290,610,20,100);
	boxLeftSide.shapeColor = "red";

	boxRightSide = createSprite(510,610,20,100);
    boxRightSide.shapeColor = "red";
	
	engine = Engine.create();
	world = engine.world;

    //boxBottom = Bodies.rectangle(400,650,200,20, {isStatic:true});
	//World.add(world, boxBottom);

	//boxLeftSide = Bodies.rectangle(305,620,20,100, {isStatic:true});
	//World.add(world, boxLeftSide);

	//boxRightSide = Bodies.rectangle(500,620,20,100, {isStatic:true});
	//World.add(world, boxLeftSide);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //rect(boxBottom.position.x,boxBottom.position.y,205,20);
  //rect(boxLeftSide.position.x,boxLeftSide.position.y,20,100);
  //rect(boxRightSide.position.x,boxRightSide.position.y,20,100);

  drawSprites();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
  {
    Matter.Body.setStatic(packageBody,false);
  }
}



