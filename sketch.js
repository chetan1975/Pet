//Create variables here
var database;
var  dog, happyDog, food, foodStock
var dogImg,happyDogImg
function preload()
{
  //load images here
  
  dogImg =loadImage("dogImg.png");

  happyDogImg =loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,40,40);
  dog.addImage(dogImg);
}


function draw() {  
  background(rgb(46,139,87))

  drawSprites();
  //add styles here

}



