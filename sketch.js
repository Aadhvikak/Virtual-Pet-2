var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{ 
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,40,40);
  dog.addImage(dog); 
  dog.scale = 0.15;  
 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    Dog.addImage(happyDog);
  }
  
  drawSprites();
  
  fill("white");
  stroke("gray");
  text("Food remaining : " + foodS,200,250);

  textSize(13);
  text("Press UP_ARROW key to feed the pet milk!");

  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}





