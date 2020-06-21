     var ground;
     const Engine = Matter.Engine;
     const World = Matter.World;
     const Bodies = Matter.Bodies;
     const Body = Matter.Body;
     const Constraint = Matter.Constraint;
     function setup() {
     createCanvas(475,800);
     engine = Engine.create();
     world = engine.world;
     ground = new Ground(400,792,800,15);
     Engine.run(engine);
     }
    var particles=[];
    var plinko=[];
    var divisions=[];
    var divisionHeight = 300
    var width = width;

     function draw() {
     rectMode(CENTER);
     background(0);
     for (let i = 40; i <= width; i=i+50) {
          plinko.push(new Plinko(i,75)); 
     }
     for (let i = 15; i <= width-20; i=i+50) {
          plinko.push(new Plinko(i,175)); 
     }
     for (let i = 40; i <= width; i=i+50) {
          plinko.push(new Plinko(i,275)); 
     }
     for (let i = 15; i <= width-20; i=i+50) {
          plinko.push(new Plinko(i,375)); 
     }
     for (let i = 0; i < plinko.length; i++) {
          plinko[i].display();
      } 
      for (let i = 0; i < plinko.length; i++) {
          plinko[i].display();
      } 
      for (let i = 0; i < plinko.length; i++) {
          plinko[i].display();
      } 
      for (let i = 0; i < plinko.length; i++) {
          plinko[i].display();
      } 
     for (let j = 0; j <= width; j=j+80) {
          divisions.push(new Divisions(j,height-divisionHeight/2,10,divisionHeight));
     }
      
     for (let j = 0; j < divisions.length; j++) {
         divisions[j].display();
     } 
     for (let k = 0; k <=width; k+50) {
     if (frameCount%60===0) {
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));  
     }
          
     }
     drawSprites();
     ground.display();
}
