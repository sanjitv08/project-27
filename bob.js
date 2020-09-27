class Bob {
  constructor(x, y, radius) {
    var options = {
        'isStatic':false,
        'restitution':1.2,
        'friction':1,
        'density':0.5,      
        'inertia':Infinity, 
        'frictionAir':0.0008,
        'frictionStatic':0.5
         
        
      }

    this.body = Bodies.circle(x, y, radius, options);
    
     
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("MAGENTA");
    
    ellipse(pos.x, pos.y, 100);
    pop();
  }
};
