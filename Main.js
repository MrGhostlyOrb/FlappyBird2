//Flappy Ball

console.log("Going to create canvas and bird");

//Create Canvas and assign id
const newCanvas = document.createElement("canvas");
newCanvas.id = "newCanvas";
document.body.appendChild(newCanvas);
const ctx = newCanvas.getContext("2d");

//Create variable to store number of clicks
let clicks = 0;

//Create variables for the bird and canvas objects
let currentCanvas = new Canvas(800,1500, ctx);
let currentBird = new Bird(50, 300, 5);
let pipes = [];

//Listen for main keydown event to move bird up
document.addEventListener('keydown', ()=>{
    currentBird.moveUp(20)
});

//Create pipes to go across the screen at set intervals
setInterval(()=>{
    console.log("Creating Pipe")
    let randY = Math.floor(Math.random()*1000);
    let randY2 = Math.floor(Math.random()*1000);
    console.log(randY);
    let pipe = new Pipe(100, 10, 1500, randY);
    let pipe2 = new Pipe(100, 10, 1500, randY2);;
    pipes.push(pipe);
    pipes.push(pipe2);
},10000)

function draw(){
    currentCanvas.clearCanvas();

    let x = currentBird.getXPos();
    let y = currentBird.getYPos();

    for(let i = 0; i < pipes.length; i++){
        ctx.beginPath();
        let pipeX = pipes[i].getX();
        let pipeY = pipes[i].getY();
        let pipeW = pipes[i].getWidth();
        let pipeH = pipes[i].getHeight();
        ctx.rect(pipeX, pipeY, pipeW, pipeH)
        ctx.stroke();
        //drawPipe(pipeX, pipeY);
        pipes[i].moveLeft(1);
    }

    ctx.beginPath();
    ctx.rect(20,20,150,100);
    ctx.stroke();

    console.log(x);
    console.log(y);
    console.log(currentCanvas.getHeight());


    if(y > currentCanvas.getHeight()){
        console.log("Game Over");
        currentBird.changeYPos(currentCanvas.getHeight())
    }
    else if(y < 0){
        console.log("Game Over");
        currentBird.changeYPos(0);
    }
    for(let i = 0; i < pipes.length; i++){
        console.log("Bird x: " + currentBird.getXPos());
        console.log("Pipe x: " + pipes[i].getX());
        console.log("Bird y: " + currentBird.getYPos());
        console.log("Pipe y: " + pipes[i].getY());
        if(currentBird.getXPos() <= pipes[i].getX() + pipes[i].getWidth() && currentBird.getXPos() >= pipes[i].getX() && currentBird.getYPos() >= pipes[i].getY() && currentBird.getYPos() <= pipes[i].getY() + pipes[i].getHeight()){
            console.log("Game Over Collision");
            let p = document.createElement('p');
            p.innerHTML = "Game Over";
            p.style.color = "red";ll
            document.body.append(p);
        }
        if(pipes[i].getX() < 0){
            pipes.splice(i, 1);
        }
        console.log("Length : " + pipes.length);
    }

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.stroke();

    currentBird.moveDown(1);

    window.requestAnimationFrame(draw)
}
draw();
