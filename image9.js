results9 = [];

function preload() {
    image9 = loadImage("image9.jpeg");
    console.log(image9);
}

function setup() {
    canvas = createCanvas(750, 500);
    canvas.position(350, 300);

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function home() {
    window.location = "index.html";
}

function draw() {
    image(image9, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results9.length; i++) {   
        rect(results9[i].x * 750/image9.width, results9[i].y * 500/image9.height, results9[i].width * 750/image9.width, results9[i].height * 500/image9.height);
        fill("black");
        text(results9[i].label, results9[i].x * 750/image9.width, results9[i].y * 500/image9.height - 10);
        document.getElementById("status").innerHTML = results9.length + " objects have been detected out of 8."
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status9 = true;

    objectDetector.detect(image9, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results9 = results;
    }
}