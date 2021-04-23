class Box {
    constructor(x,y, width, height){
        var options = {
            'restitution' : 1,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      //  this.body.setColor = "black";
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}