results5 = [];

function preload() {
    image5 = loadImage("image5.jpeg");
    console.log(image5);
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
    image(image5, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results5.length; i++) {   
        rect(results5[i].x * 750/image5.width, results5[i].y * 500/image5.height, results5[i].width * 750/image5.width, results5[i].height * 500/image5.height);
        fill("black");
        text(results5[i].label, results5[i].x * 750/image5.width, results5[i].y * 500/image5.height - 10);
        document.getElementById("status").innerHTML = results5.length + " objects have been detected out of 6.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image5, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results5 = results;
    }
}