results7 = [];

function preload() {
    image7 = loadImage("image7.jpg");
    console.log(image7);
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
    image(image7, 0, 0, 750, 500);

    strokeWeight(5);

    for (let i = 0; i < results7.length; i++) {   
        rect(results7[i].x * 750/image7.width, results7[i].y * 500/image7.height, results7[i].width * 750/image7.width, results7[i].height * 500/image7.height);
        fill("black");
        text(results7[i].label, results7[i].x * 750/image7.width, results7[i].y * 500/image7.height - 10);
        document.getElementById("status").innerHTML = results7.length + " objects have been detected out of 9.";
        noFill();
    }
}

function modelLoaded() {
    console.log("CocoSSD is loaded.");
    status7 = true;

    objectDetector.detect(image7, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        results7 = results;
    }
}