function Drop() {
    this.x = random(0, width);
    this.y = 0;
    this.wid = random(1, 10);
    this.len = random(20, 50);
    this.speed = map(this.wid, 1, 5, height/400, height/96);

    this.update = function() {
        this.y = this.y + this.speed;
        if(this.y > height) {
            this.x = random(-width, width);
            this.y = 0
            this.wid = random(1, 10);
            this.len = random(20, 50);
            this.speed = map(this.wid, 1, 5, width/380, width/96);
        }
    }

    this.show = function() {
        colorMode(HSB);
        fill(h, s ,b);
        noStroke();
        rect(this.x, this.y, this.wid, this.len);
    }
}

var rain = [];
var h;
var s;
var b;

function setup() {
    createCanvas(windowWidth-0.1, windowHeight);
    h = 0; s = 80; b = 30;
    for(var i = 0; i < 300; i++) {
        rain[i] = new Drop();
    }
}

function draw() {
    background(255);
    h++;
    if(h == 360) {
        h = 0;
    }
    for(var i = 0; i < rain.length; i++) {
        rain[i].update();
        rain[i].show();
    }
}