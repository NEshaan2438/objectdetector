results2 = [];

function preload() {
    image2 = loadImage("image2.webp");
    console.log(image2);
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
    image(image2, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results2.length; i++) {   
        rect(results2[i].x * 750/image2.width, results2[i].y * 500/image2.height, results2[i].width * 750/image2.width, results2[i].height * 500/image2.height);
        fill("black");
        text(results2[i].label, results2[i].x * 750/image2.width, results2[i].y * 500/image2.height - 10);
        document.getElementById("status").innerHTML = results2.length + " object has been detected out of 5.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image2, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results2 = results;
    }
}