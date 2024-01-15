function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("sketch-container")
}

function draw() {
    background("black");
    noStroke();
    for (var x=0; x<500; x++) {
        fill(187, 114, 242);
        circle(x, f(x), 10);
    }
}

function f(x) {
    return 1.1**x*2+5;
}