
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint; 
var boy,tree,stone,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,ground;

function preload()
{
	boy = loadImage("Images/boy.png");
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(435,430);
	m1 = new Mango(1150,70,35);
	m2 = new Mango(1140,110,34);
	m3 = new Mango(900,120,31);
	m4 = new Mango(1000,80,38);
	m5 = new Mango(1110,90,32);
	m6 = new Mango(1170,100,39);
	m7 = new Mango(1190,140,33);
	m8 = new Mango(1130,130,30);
	m9 = new Mango(1200,160,37);
	m10 = new Mango(1160,170,40);
	ground = new Ground(width/2,700,width,20);
	slingshot = new SlingShot(stone.body,{x:235,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(boy,300,500,200,300);
  image(tree,1050,300,500,700);
  ground.display();
  slingshot.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
 
	collide(stone,m1);
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function collide(s,m){
	mPosition = m.body.position;
	sPosition = s.body.position;
	var d = dist(mPosition.x,mPosition.y,sPosition.x,sPosition.y);
	if(d<=m.r+s.r ){
		Body.setStatic(m.body,false);

	}
}

