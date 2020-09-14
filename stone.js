class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 20;
      this.image=loadImage("Images/stone.png");
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
  