class Canvas{
    constructor(height, width) {

        this.height = height;
        this.width = width;

    }
    createCanvas(){
        const newCanvas = document.createElement("canvas");
        newCanvas.id = "newCanvas";
        newCanvas.height = this.height;
        newCanvas.width = this.width;
        document.body.appendChild(newCanvas);
        const ctx = newCanvas.getContext("2d");



        return ctx;

    }
    clearCanvas(ctx){
        ctx.clearRect(0,0,2000,1000)
    }
    drawBird(){
        let x = currentBird.getXPos();
        let y = currentBird.getYPos();


    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}