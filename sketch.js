const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
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
  block1 = new box(300,275,30,40);
  console.log(box1);
  box2 = new box(330,275,30,40);
  box3 = new box(360,275,30,40);
  box4 = new box(390,275,30,40);
  box5 = new box(420,275,30,40);
  box6 = new box(450,275,30,40);
  box7 = new box(480,275,30,40);
  //level two
  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10 = new box(390,235,30,40);
  box11 = new box(420,235,30,40);
  box12 = new box(450,235,30,40);
  //level three
  box13 = new box(360,195,30,40);
  box14 = new box(390,195,30,40);
  box15 = new box(420,195,30,40);
  //top
  box16 = new box(390,155,30,40);

  //set 2 for second stand
  //level one
  boxes1 = new box(640,175,30,40);
  boxes2 = new box(670,175,30,40);
  boxes3 = new box(700,175,30,40);
  boxes4 = new box(730,175,30,40);
  boxes5 = new box(760,175,30,40);
  //level two
  boxes6 = new (670,135,30,40);
  boxes7 = new box(700,135,30,40);
  boxes8 = new box(730,135,30,40);
  //top
  boxes9 = new box(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the boxes",100,30);

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
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}