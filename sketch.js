
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	d1=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,680,800,10);
	paper1=new Paperball(200,200,40);
    
	box1=new Box(520,625,20,100);
	box2=new Box(605,665,150,20);
    box3=new Box(690,625,20,100);
	//dustbin1=new Dustbin(605,605,150,150);


    


	Engine.run(engine);
  
}


function draw() {
   
  background("white");
  ground.display()
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  //dustbin1.display();
  imageMode(CENTER);
      
      
  image(d1,605, 605,200,150);
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45})
	}
	
}



	
