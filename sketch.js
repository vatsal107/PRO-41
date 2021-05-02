var hr=hour();
var mn=minute();
var sc=seconds();

function preload(){
    
}

function setup(){
scAngle=map(sc,0,60,0,360);
    
}

function draw(){
push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop()
}   

