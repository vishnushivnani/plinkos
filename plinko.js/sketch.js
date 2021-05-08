const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var decorations = [];
var ground;
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  // makes Base 
  ground = new Ground(width/2,height,width,20);

  // makes divisions 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  // makes Plinko (row1)
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
  // makes Plinko (row2)
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }
  // makes Plinko (row3)
     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
      // makes Plinko (row4)

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    // makes triangle on the left

   for (var d = 0;d <= width; d = d+ 50){
      decorations.push(new Triangle(10, d, 10,90));
    }

    // makes triangle on the right
    for (var d = 0;d <= width; d = d+ 50){
      decorations.push(new Triangle(790, d, 10,-90));
    }
}
 


function draw() {
  background(208,42,44);
  
  Engine.update(engine);
  //diplays ground
 ground.display();
// displays all rows for plinkos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
  // makes particle fall after 60 frames count
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
   }
 // displays particles
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   // displays divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for (var d = 0; d < decorations.length; d++) {
     
    decorations[d].display();
  }

}