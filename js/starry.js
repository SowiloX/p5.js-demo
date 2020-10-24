function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.update = function() {
        this.z = this.z - 10;
        if(this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    this.show = function() {
        fill(255);
        noStroke();

        var relativeX = map(this.x/this.z, 0, 1, 0, width);
        var relativeY = map(this.y/this.z, 0 ,1, 0, height);
        var radius = map(this.z, 0, width, 20, 0);

        ellipse(relativeX, relativeY, radius, radius);
    }

}


var stars = [];

function setup() {
    createCanvas(windowWidth-0.1, windowHeight);
    for(var i = 0; i < 1000; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    
    background(0);
    translate(width/2, height/2);
    for(var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
      }
}