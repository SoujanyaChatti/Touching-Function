var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 20, 50);
 fixedrect=createSprite(200,200,30,20);
 movingrect.shapeColor="blue";
 fixedrect.shapeColor="blue";
}

function draw() {
  background(0); 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){
     
      
    movingrect.shapeColor="red";
    fixedrect.shapeColor="yellow";
  }
  else{
    movingrect.shapeColor="blue";
 fixedrect.shapeColor="blue";
  }
  movingrect.x=mouseX;
  movingrect.y=mouseY; 

  drawSprites();
}