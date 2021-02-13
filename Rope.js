class Rope{
  constructor(body1, pointB)
  {

    
   var options={
     bodyA: body1,
     
     pointB:pointB,
     stiffness:0.4,
     length:250
   }
   
   this.rope = Constraint.create(options);
   World.add(world, this.rope);
 }
display(){
 var pointA = this.rope.bodyA.position;
 var pointB = this.rope.pointB;
 
 strokeWeight(5);
 stroke("white");
 line(pointA.x,pointA.y,pointB.x,pointB.y)
 console.log(pointA.x+","+pointA.y+","+pointB.x+","+pointB.y)
}

}
