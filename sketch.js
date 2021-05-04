const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var gameState = "onSling"
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  pieces1 = new Block(625,175,30,40);
  pieces2 = new Block(655,175,30,40);
  pieces3 = new Block(685,175,30,40);
  pieces4 = new Block(715,175,30,40);
  pieces5 = new Block(745,175,30,40);
  pieces6 = new Block(775,135,30,40);
  //level two
  pieces7 = new Block(655,135,30,40);
  pieces8 = new Block(685,135,30,40);
  pieces9 = new Block(715,135,30,40);
  pieces10 = new Block(745,135,30,40);
  //top
  pieces11 = new Block(685,105,30,40);
  pieces12 = new Block(715,105,30,40);

  pieces13 = new Block(700,75,30,40);
  

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",450,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  pieces1.display();
  pieces2.display();
  pieces3.display();
  pieces4.display();
  pieces5.display();
  pieces6.display();
  fill("pink");
  pieces7.display();
  pieces8.display();
  pieces9.display();
  pieces10.display();
  fill("turquoise")
  pieces11.display();
  pieces12.display();
  fill("pink");
  pieces13.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
if(mouseX>=0 && mouseX>0 && gameState != "launched")
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}
function keyPressed(){
//write code for extra chance of the player
if(keyCode===32){
  slingShot.attach(this.polygon);
  Matter.Body.setPosition(this.polygon,{x:100,y:200});
  Matter.Body.setAngle(this.polygon,0);
  gameState = "onSling";
}
}
