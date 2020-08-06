class Pipe{
    constructor(height, width, x, y, tb){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.tb = tb;
    }
    changeX(newX){
        this.x = newX;
    }
    changeY(newY){
        this.y = newY;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    moveLeft(x){
        this.x = this.x - x;
    }
    getHeight(){
        return this.height;
    }
    getWidth(){
        return this.width;
    }

}