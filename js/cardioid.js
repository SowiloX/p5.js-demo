var r;
var factor = 0;
var rate = 0.005
var total = 300;

function setup() {
    colorMode(HSB);
    createCanvas(windowWidth-0.1, windowHeight);
    r = windowHeight / 2 - 16;
}

function getVector(index, total) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const v = p5.Vector.fromAngle(angle + PI);
    v.mult(r);
    return v;
}

function draw() {
    background(0);

    factor += rate;
    if(factor >= 6 || factor < 0)  {rate *= -1;}

    translate(windowWidth / 2, windowHeight / 2);
    stroke(factor * 100 % 360, 100, 50);
    noFill();
    ellipse(0, 0, r * 2);

    for (var i = 0; i < total; i++) {
        a = getVector(i, total);
        b = getVector(i * factor, total);
        line(a.x, a.y, b.x, b.y);
    }
}