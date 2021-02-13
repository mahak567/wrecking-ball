class Ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill ("white");

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}