
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
  trashIMG = loadImage("trash1.png");	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	paper1= new Paper(200,450,32,32);
    

	ground1= new Ground(400,500,800,50);
	trash1= new Trash(430,410,20,120);
	trash3= new Trash(550,410,20,120);
	
	trash2=createSprite(490,400,140,150);
	trash2.addImage(trashIMG);
	trash2.scale=0.5;
	

	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  ground1.display();
  trash1.display();
  trash3.display();
  paper1.display();
  trash2.display();  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:210,y:-210});
	}
}


