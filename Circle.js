class Pig {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1,
          

      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(5);
      stroke("black");
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
