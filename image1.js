results1 = [];

function preload() {
    image1 = loadImage("image1.jpeg");
    console.log(image1);
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
    image(image1, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results1.length; i++) {   
        noFill();
        rect(results1[i].x * 750/image1.width, results1[i].y * 500/image1.height, results1[i].width * 750/image1.width, results1[i].height * 500/image1.height);
        fill("black");
        text(results1[i].label, results1[i].x * 750/image1.width, results1[i].y * 500/image1.height - 10);
        document.getElementById("status").innerHTML = results1.length + " objects have been detected out of 7.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image1, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results1 = results;
    }
}