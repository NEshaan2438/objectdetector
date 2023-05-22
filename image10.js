results10 = [];

function preload() {
    image10 = loadImage("image10.jpeg");
    console.log(image10);
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
    image(image10, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results10.length; i++) {   
        rect(results10[i].x * 750/image10.width, results10[i].y * 500/image10.height, results10[i].width * 750/image10.width, results10[i].height * 500/image10.height);
        fill("black");
        text(results10[i].label, results10[i].x * 750/image10.width, results10[i].y * 500/image10.height - 10);
        document.getElementById("status").innerHTML = results10.length + " object has been detected out of 1."
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status10 = true;

    objectDetector.detect(image10, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results10 = results;
    }
}