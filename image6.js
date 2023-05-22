results6 = [];

function preload() {
    image6 = loadImage("image6.webp");
    console.log(image6);
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
    image(image6, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results6.length; i++) {   
        rect(results6[i].x * 750/image6.width, results6[i].y * 500/image6.height, results6[i].width * 750/image6.width, results6[i].height * 500/image6.height);
        fill("black");
        text(results6[i].label, results6[i].x * 750/image6.width, results6[i].y * 500/image6.height - 10);
        document.getElementById("status").innerHTML = results6.length + " objects have been detected out of 6.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image6, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results6 = results;
    }
}