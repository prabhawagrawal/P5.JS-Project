function preload(){

}

function setup(){
    canvas = createCanvas(950, 800);
    canvas.position(110, 100);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 175, 125, 680, 540);
    // *************************************
    c = color('rgb(219, 223, 253)');
    fill(c);
    noStroke();
    rect(130, 75, 770, 10)
    // *************************************
    c = color('rgb(219, 223, 253)');
    fill(c);
    noStroke();
    rect(890, 75, 10, 625)
    // *************************************
    c = color('rgb(36, 47, 155)');
    fill(c);
    noStroke();
    circle(894.5, 80, 30);
    // *************************************
    c = color('rgb(219, 223, 253)');
    fill(c);
    noStroke();
    rect(125, 85, 10, 625)
    // *************************************
    c = color('rgb(36, 47, 155)');
    fill(c);
    noStroke();
    circle(130, 80, 30);
    // *************************************
    c = color('rgb(219, 223, 253)');
    fill(c);
    noStroke();
    rect(130, 700, 770, 10)
    // *************************************
    c = color('rgb(36, 47, 155)');
    fill(c);
    noStroke();
    circle(897, 702.5, 30);
    // *************************************
    c = color('rgb(36, 47, 155)');
    fill(c);
    noStroke();
    circle(130, 705, 30);
}

function takeSnapshot(){
    save("Picture.png");
}