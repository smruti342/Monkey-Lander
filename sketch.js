var monkey,monkeyspaceship,monkeylanding
var obstacle,banana,pineapple,strawberry,coconut
var background;


function preload(){

    backgroundImage = loadImage("images/background.png");
    bananaImage = loadImage("images/banana.png");
    coconutImage = loadImage("images/coconut.png");
    monkeylandingImage = loadImage("images/monkeylanding.png");
    monkeyspaceshipImage = loadImage("images/monkeyspaceship.png");
    obstacleImage = loadImage("images/obstacle.png");
    pineappleImage = loadImage("images/pineapple.png");
    strawberryImage = loadImage("images/strawberry.png");

}

function setup(){
    
    var canvas = createCanvas(1000,500);

    bg = createSprite(500,500,50,50);
    bg.addImage(backgroundImage);
    bg.velocityX = -2;
    bg.scale = 4;

}

function draw(){

    background("9");

   


    drawSprites();

}