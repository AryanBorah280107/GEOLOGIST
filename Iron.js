class Iron {

    constructor(x,y,w,h){

        var options = {
            restitution : 0.8,
            friction : 3,
            density : 30,
        }

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display()   {

        var ironpos = this.body.position;
        var ironangle = this.body.angle;

        push();
        translate(ironpos.x,ironpos.y);
        rotate(ironangle);
        strokeWeight(2);
        stroke("black");
        fill('brown');
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }
}