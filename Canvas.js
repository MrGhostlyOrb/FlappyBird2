class Canvas{
    constructor(height, width, ctx) {

        this.height = height;
        this.width = width;
        this.ctx = ctx;

        const newCanvas = document.getElementById("newCanvas");
        newCanvas.height = height;
        newCanvas.width = width;

    }
    clearCanvas(){
        this.ctx.clearRect(0,0,2000,1000)
    }
    drawBird(){
        let x = currentBird.getXPos();
        let y = currentBird.getYPos();

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
        ctx.stroke();


    }
    drawPipe(){
        let x = currentPipe.getX();
        let y = currentPipe.getY();

        ctx.beginPath();
        ctx.rect(50,50,50,50);
        ctx.rect(x, y, currentPipe.getHeight(), currentPipe.getWidth());
        ctx.stroke();
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}