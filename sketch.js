
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, treeImg;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stone;
var chain;

function preload(){
  treeImg = loadImage("sprites/tree.png")
  boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400, 680, 800, 35)
  tree = createSprite(550, 435)
  tree.addImage(treeImg)
  tree.scale = 0.4;
  boy = createSprite(90, 580)
  boy.addImage(boyImg)
  boy.scale = 0.2;
  mango1 = new Mango(570,250,30);
  mango2 = new Mango(463,250,30);
  mango3 = new Mango(540,345,30);
  mango4 = new Mango(356,380,30);
  mango5 = new Mango(596,356,30);
  mango6 = new Mango(710,344,30);
  mango7 = new Mango(475,320,30);
  mango8 = new Mango(596,290,30);
  mango9 = new Mango(585,390,30);
  mango10 = new Mango(535,250,30);
  stone = new Stone(90, 580)
  chain = new Chain(stone.body, {x:40, y:560})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);

  ground.display();
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  chain.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  chain.fly()
}
function detectcollision(object1, object2){
  var distance = dist(object1.body.position.x, object1.body.position.y, object2.body.position.x, object2.body.position.y)
  console.log(object1.radius)
  if(distance <= object1.radius+object2.radius){
  Matter.Body.setStatic(object2.body, false)
  }
}