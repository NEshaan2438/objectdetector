results3 = [];

function preload() {
    image3 = loadImage("image3.jpeg");
    console.log(image3);
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
    image(image3, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results3.length; i++) {   
        rect(results3[i].x * 750/image3.width, results3[i].y * 500/image3.height, results3[i].width * 750/image3.width, results3[i].height * 500/image3.height);
        fill("black");
        text(results3[i].label, results3[i].x * 750/image3.width, results3[i].y * 500/image3.height - 10);
        document.getElementById("status").innerHTML = results3.length + " objects have been detected out of 6.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image3, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results3 = results;
    }
}