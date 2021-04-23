class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution' : 1,
            isStatic : false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
      //  this.body.setColor = "black";
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}