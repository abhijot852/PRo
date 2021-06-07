class paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
         friction:5,
density:1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      //this.width = width;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius);
      //fill("red");
    }
  };
  