var bread;
var breadImage;
function preload(){
breadImage=loadImage("bread.png");
}

function setup(){
    createCanvas(400,400);
    bread=createSprite(200,200,10,10);
    bread.addImage(breadImage);
}
function draw(){
    
    drawSprites();
}