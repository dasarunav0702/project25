class Paperball {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          'friction':5,
          'density':1,
          'restitution':1

      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.r=r;
      this.image= loadImage("paper.png") 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill ("red");
      
      image(this.image,0,0,this.r,this.r);
      pop();
    }
  };
  