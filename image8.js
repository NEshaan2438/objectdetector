results8 = [];

function preload() {
    image8 = loadImage("image8.jpeg");
    console.log(image8);
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
    image(image8, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results8.length; i++) {   
        rect(results8[i].x * 750/image8.width, results8[i].y * 500/image8.height, results8[i].width * 750/image8.width, results8[i].height * 500/image8.height);
        fill("black");
        text(results8[i].label, results8[i].x * 750/image8.width, results8[i].y * 500/image8.height - 10);
        document.getElementById("status").innerHTML = results8.length + " objects have been detected out of 6.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status8 = true;

    objectDetector.detect(image8, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results8 = results;
    }
}