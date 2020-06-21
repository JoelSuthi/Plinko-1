class Particle {
     constructor(x,y,R){ 
      var options = { 
      restitution:0.4, 
      }
     this.body = Bodies.circle(x,y,R,options); 
     this.color = color(random(0,255),random(0,255),random(0,255));
     this.R = R; 
     this.x = x; 
     this.y = y; 
     World.add(world, this.body); 
     } 
     display(){ 
          var pos =this.body.position; 
          var angle = this.body.angle;
          push();
          fill(this.color);
          ellipse(0,0,this.R,this.R);
          translate(pos.x, pos.y);
          rotate(angle); 
          pop(); 
      } 
      };