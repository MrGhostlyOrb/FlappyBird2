console.log("Going to create canvas and bird");

let clicks = 0;

let currentCanvas = new Canvas(1000,2000);
let currentBird = new Bird(5, 5, 5);

console.log("Creating Canvas");

let ctx = currentCanvas.createCanvas();

console.log("Creating Bird");

currentBird.createBird(ctx);

currentBird.moveBird(ctx);
document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('canvas')) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);

    console.log("Clicked the canvas");

    clicks = clicks + 1;



    if(clicks >= 2){

        console.log("More than 1 click");

        console.log(currentBird.getXPos());

        currentBird.changeXPos(50);

        console.log(currentBird.getXPos());

        function move(){
            console.log("Time")
        }

        while(currentBird.getYPos() < 100){
            setTimeout(move,1000);
        }

    }


}, false);