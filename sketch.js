var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



//generate random number+
var rand =  Math.round(random(1,100))

}
function ceateApples(){

  apple = createSprite(200, 0, 30, 30);
  apple.scale = 0.05;
  apple.addImage(appleImg);
  apple.velocityY = 3;  
}

function createLeaf(){
  leaf = createSprite(250, 0, 30, 30);
  leaf.scale = 0.1;
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
}

function draw() {
  background("white");

  rabbit.x = World.mouseX

  console.log(frameCount);

  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  //Spawn Apple
  spawnApple();

  //Spawn Leaf
  spawnLeaf();
  
  drawSprites();

}
//function to spawn the apples
 function spawnApple (){
  // write your code here 
 if(frameCount % 80 == 0){
   //if(select_sprites == 1){
    apple=createSprite(200, 0, 40, 10);
    apple.addImage(appleImg);

    apple.velocityY = 4;
    apple.scale = 0.05;
    apple.x = Math.round(random(40,360))
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
  
    apple.lifetime = 125;    
  }
}
function spawnLeaf (){
  if(frameCount % 80 == 0){  
    leaf=createSprite(200, 0, 40, 10);
    leaf.addImage(leafImg);

    leaf.velocityY = 3;
    leaf.scale = 0.1;
    leaf.x = Math.round(random(40,360))
    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
 
    leaf.lifetime = 125;

  }      
}