class Plinko {
     constructor(x,y,R){ 
      var options = { 
      isStatic:false, 
      restitution:0.3, 
      friction:0.5,
      density:1.2
      }
     this.body = Bodies.rectangle(x,y,R,options); 
     this.R = R; 
     this.x = x; 
     this.y = y; 
     World.add(world, this.body); 
     } 
     display(){ 
      var pos =this.body.position; 
      var angle = this.body.angle;
      fill("white");
      ellipse(pos.x,pos.y,20);
      } 
      };