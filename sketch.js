const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, leftwall, rightwall
var bridge, link
var support

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height -10, width*2, 20)
  leftwall = new Base(200, height/2, 400, 100)
  rightwall = new Base(width -200, height/2, 400, 100)
  bridge = new Bridge(15, {x:width/2 -335, y:height/2})
  support = new Base(width -400, height/2, 40, 20);
  link = new Link(bridge, support)
  for(var i=0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300)
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80)
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);


  ground.show();
  leftwall.show();
  rightwall.show();
  bridge.show();
  for(var stone of stones){
    stone.show();
  }
}
