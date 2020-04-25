class Box {
    constructor(x,y,width,height,color)    {
        var options = {           
            isStatic:false            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color =  color;
        this.Visiblity = 255;
        World.add(world, this.body);
    }
    display()   {   
        //console.log(this.body.position.y);     
        if(this.body.speed < 5) { 
            push();  
            var pos = this.body.position;
            rectMode(CENTER);
            
            fill(this.color);
            stroke(0);
            strokeWeight(5);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
            
        }
        else{
            push();      
            var pos = this.body.position;
            World.remove(world, this.body);   
            this.Visibility = this.Visiblity - 5;
            tint(255, this.Visiblity);                          
            pop();
        }
    }
}