class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Sling);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        
    }

    display(){
        image(this.sling1,200,100);
        image(this.sling2,170,100);
        if(this.Sling.bodyA !=null) {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        push();
        
        if(pointA.x >220)   {
            strokeWeight(5);
            line(pointA.x + 15, pointA.y , pointB.x - 10, pointB.y + 25);
            line(pointA.x + 15, pointA.y, pointB.x + 30, pointB.y + 25);
            image(this.sling3,pointA.x - 27,pointA.y - 10,15,30); 
            
        }
        else    {
            strokeWeight(5);
            line(pointA.x - 15, pointA.y , pointB.x - 10, pointB.y + 25);
            line(pointA.x - 15, pointA.y, pointB.x + 30, pointB.y + 25);
            image(this.sling3,pointA.x - 27,pointA.y - 10,15,30);
        }
        pop();       
        }
        
    }
    fly()  {
        this.Sling.bodyA = null;
    } 
    
}