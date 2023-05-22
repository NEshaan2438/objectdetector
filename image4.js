results4 = [];

function preload() {
    image4 = loadImage("image4.jpeg");
    console.log(image4);
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
    image(image4, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results4.length; i++) {   
        rect(results4[i].x * 750/image4.width, results4[i].y * 500/image4.height, results4[i].width * 750/image4.width, results4[i].height * 500/image4.height);
        fill("black");
        text(results4[i].label, results4[i].x * 750/image4.width, results4[i].y * 500/image4.height - 10);
        document.getElementById("status").innerHTML = results4.length + " objects have been detected out of 9.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status1 = true;

    objectDetector.detect(image4, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results4 = results;
    }
}