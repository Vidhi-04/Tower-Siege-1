class blueBox {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y,30, 40,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      stroke("black")
      strokeWeight(2);
      fill("lightblue")
      rect(0, 0,30, 40);
      pop();
    }
  }