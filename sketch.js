var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(500,500); 
   
    angleMode(DEGREES);   
}

function draw(){
    background(155, 255, 81);

     
    translate(200,200)
    rotate(-90)

    
    hr = hour();
    mn = minute();
    sc = second();

    
    scAngle = map(sc,0,60, 0, 390);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    
    push();
    rotate(scAngle);
    stroke(0, 175, 0);
    strokeWeight(10);
    line(0,0,100,0);
    pop()

    
    push();
    rotate(mnAngle);
    stroke(0, 0, 255);
    strokeWeight(10);
    line(0,0,75,0);
    pop()

    
    push();
    rotate(hrAngle);
    stroke(191, 0, 255);
    strokeWeight(10);
    line(0,0,50,0);
    pop()

    stroke(0,0,0);
    point(0,0,0)

    
    strokeWeight(10);
    noFill();
    
    stroke(0, 175, 0);
    arc(0,0,300,300,0,scAngle);
    
    stroke(0, 0, 255);
    arc(0,0,280,280,0,mnAngle);
    
    stroke(191, 0, 255);
    arc(0,0,260,260,0,hrAngle);
}
