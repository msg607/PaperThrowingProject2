class Paper {
    constructor(x,y,r,h){
        var options={
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 2

           
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage ("paper2.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}