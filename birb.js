class bird{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.3
        }
        this.body=Bodies.rectangle(mouseX,mouseY,50,50,options)
        World.add(world,this.body)
    }
    display(){
    var pos =this.body.position;
    pos.x=mouseX
    pos.y=mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0,0,50,50);
    pop();
    }
}
