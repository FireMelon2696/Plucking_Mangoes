class Mango {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          isStatic:true,
          'friction':0.3,
          'density':0.3
      }
      this.body = Bodies.circle(x, y, r, options);
      this.width = r;
      this.height = r;

      this.image=loadImage("Images/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
      
    }
  };
  