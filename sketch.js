
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg,backgroundImg



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(800,200,30);
	mango2 = new Mango(940,200,30);
	mango3 = new Mango(800,100,30);
	mango4 = new Mango(900,300,30);
	mango5 = new Mango(1100,200,30);
	mango6 = new Mango(1000,300,30);
  mango7 = new Mango(1000,280,30);
  mango8 = new Mango(1000,100,30);
  mango9 = new Mango(930,180,30);
  tree = new Tree(900,580);
  ground = new Ground(0,580,3000,20);
	boy = new Boy(250,500);
	chain = new Chain(stone.body,{x:160, y:400});

	Engine.run(engine);
  
}
function preload() {
  backgroundImg = loadImage("bg.png");
}


function draw() {
  rectMode(CENTER);
  background(500);

  background(backgroundImg)
  fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 10,200);
  fill(247,121,3)
 text("RS Creations",10,20)
 
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
