class Bob{
    constructor(x1, y1, radius){
        this.body = Bodies.circle(x1, y1, radius, {isStatic: false, restitution: 1.1});
        radius = this.body.radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        push();
        fill("black");
        //ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 100);
        pop();
    }
}