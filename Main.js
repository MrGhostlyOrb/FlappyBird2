console.log("Going to create canvas and bird");

//Create Canvas and assign id
const newCanvas = document.createElement("canvas");
newCanvas.id = "newCanvas";
document.body.appendChild(newCanvas);
const ctx = newCanvas.getContext("2d");

//Create variable to store number of clicks
let clicks = 0;

//Create variable g for gravity
const g = 6;
const f = 100;

//Create variables for the bird and canvas objects
let currentCanvas = new Canvas(800,1500, ctx);
let currentBird = new Bird(5, 5, 5);

//Get attributes of the current bird object
console.log("Creating Bird");
currentBird.createBird();


function loop(timestamp) {
    var progress = (timestamp - lastRender);


    currentCanvas.clearCanvas();
    console.log("Cleared canvas");

    currentBird.moveDown(g);

    currentCanvas.drawBird();
    console.log("Drew Bird");

    if(currentBird.getYPos() > currentCanvas.height){
        currentBird.changeXPos(currentCanvas.height);
    }



    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}

//Frame stuff
var lastRender = 0;
window.requestAnimationFrame(loop);

//Draw the bird on the canvas
currentCanvas.drawBird();

//Add event listener to listen for clicks
document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('canvas')) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);
    console.log("Clicked the canvas");

    //Add 1 to clicks once canvas has been clicked
    clicks = clicks + 1;

    currentBird.moveUp(f);
    currentCanvas.drawBird();


}, false);