class Bird{
    constructor(x, y, lives) {
        this.x = x;
        this.y = y;
        this.lives = lives;
    }
    createBird(){

        console.log("Bird attributes are : " + this.x + " xpos " + this.y + " ypos " + this.lives + " lives ")

    }
    moveBird(){

        this.y = this.y + 1;
        currentBird.createBird();
    }
    moveUp(f){
        this.y = this.y - f;
    }
    moveDown(g){
        this.y = this.y + g;
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