const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var ball;


var ground2, ground3, ground4;


function setup(){
    var canvas = createCanvas(2000,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(210,100,30);

    box1 = new Box(850,280,30,30,"orange");
    box2 = new Box(850,270,30,30,"orange");
    box3 = new Box(850,260,30,30,"orange");
    box4 = new Box(910,250,30,30,"blue");
    box5 = new Box(910,240,30,30,"blue");
    box6 = new Box(910,230,30,30,"blue");
    box7 = new Box(970,230,30,30,"orange");
    box8 = new Box(970,220,30,30,"orange");
    box9 = new Box(970,210,30,30,"orange");

    

    ground1 = new Ground(210,300,70,10);  
    ground2 = new Ground(600,385,1800,20);  
    ground3 = new Ground(900,300,300,10);
    
    slingShot = new SlingShot(ball.body,{x:200,y:100});   
}
function draw(){
    background(220, 220, 220);       
    Engine.update(engine); 

    slingShot.display();
    ground1.display();
    ground2.display(); 
    ground3.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    ball.display();       
}
    
function mouseDragged()    {
     Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
}
function mouseReleased()    {
    slingShot.fly();
}