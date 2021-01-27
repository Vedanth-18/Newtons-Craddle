class Roof{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 500, 60, {isStatic: true});
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, 700, 60);
    }
}