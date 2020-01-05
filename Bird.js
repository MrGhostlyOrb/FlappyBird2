class Bird{
    constructor(x, y, lives) {
        this.x = x;
        this.y = y;
        this.lives = lives;
    }
    createBird(ctx){

        this.ctx = ctx;

        console.log("Creating bird here");

        console.log("Bird attributes are : " + this.x + " xpos " + this.y + " ypos " + this.lives + " lives ")

        ctx.beginPath();
        ctx.ellipse(this.x,this.y,25,25,0,0,Math.PI * 2,false);
        ctx.stroke();

    }
    moveBird(ctx){
        this.y = this.y + 1;
        currentBird.createBird(ctx);
    }
    getXPos(){
        return this.x;
    }
    getYPos(){
        return this.y;
    }
    changeXPos(newX){
        this.x = newX;
    }
    changeYPos(newY){
        this.y = newY;
    }

}