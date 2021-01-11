var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var star_option={
		restitution:0.5, isStatic:false
	}
	
	
	starBody = Bodies.circle(650 , 30 , 5 ,star_option );
	World.add(world, starBody);
	
	Engine.run(engine);
	
	star.x=starBody.position.x
	star.y=starBody.position.y
	
	
	
		}


function draw() {
  background(bgImg);
  Engine.update(engine);
 
  
  ellipse(starBody.position.x,starBody.position.y,20,20);
 
  keyPressed()
  

  drawSprites();

}

function keyPressed() {
	if(keyDown("left_arrow")){
	 fairy.x=fairy.x-3
	}

	if(keyDown("Right_arrow")){
		fairy.x=fairy.x+3
	   }

}



	

