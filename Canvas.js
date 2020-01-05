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
        ctx.beginPath();
        ctx.lineTo(50,50);
        ctx.moveTo(30,30);
        ctx.lineTo(60,60);
        ctx.stroke();
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}