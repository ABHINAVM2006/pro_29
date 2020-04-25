class Ball  {
    constructor(x,y,radius) {
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display()   {
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("green");
        stroke(0);
        strokeWeight(5);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}