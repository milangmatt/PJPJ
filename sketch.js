let cur=0;
let poocur=0;
let ranpoo;
let ran;
let score=0;
let curspeed=3;

let inbasket;
let pooinbasket;
let basket_width=60;
let long_wait=0;




function setup() {
  createCanvas(480, 480);
  ran=random(40,width-40);;
  ranpoo= random(40,width-40);
  highScore = getItem('HS');
  
  if (highScore === null) {
    highScore = 0;
  }
  
}

function draw() {
  // put drawing code here
  background(0);
  
  startGame();
}

function startGame(){
  displayScore();

  fill(77, 61, 18)
  ellipse(ranpoo,poocur,32,50);
  fill(255)
  ellipse(ran,cur,32,40);
  ellipse(mouseX,mouseY,32,32);
  rect(mouseX,height-40,basket_width,32);
 
  inbasket=((mouseX+basket_width)>=ran)&(mouseX<=ran);
  pooinbasket = ((mouseX+basket_width)>=ranpoo)&(mouseX<=ranpoo);
  cur+=curspeed
  poocur+=6


  if (((cur>=height-40))&(inbasket)) {
    
    score +=1;
    cur=0;
    if(curspeed<=8){
      curspeed+=0.25;
    }else{
      curspeed+=0.05;
    }
    
    ran= random(40,width-40);
    
  }
  if (cur>=height){
    cur=0;
    score=score-1;
    ran= random(40,width-40);
  }
  if(poocur>=height){
    poocur=0;
    ranpoo= random(40,width-40);
  }
  if ((poocur>=height-40)&(pooinbasket)) {
    gameOver();
   
    score=0;
    poocur=0;
    ranpoo= random(40,width-40);
    
  }

function gameOver(){
 
  noLoop();
  highScore = max(highScore, score);
  storeItem('HS', highScore);
  curspeed=3
  background(0)
  textSize(48);
  textAlign(CENTER);
  textFont('Arial');
  fill(255, 0, 0);
  text(`Game Over`, width/2, height/3);
  textSize(20);
  textAlign(CENTER);
  textFont('Courier New');
  fill(255, 0, 0);
  text(`HighScore: ${highScore}\nScore : ${score}\n\n Tap to Play Again`, width/2, height/2);
}

}
function displayScore() {

  textSize(20);
  textAlign(CENTER);

  //Add font
  textFont('Courier New');
  fill(255, 0, 0);
  text(`Score : ${score}`, width/8, height/8);
}

function mousePressed(){
  if(isLooping()===false){
    startGame();
    loop();
  }
}

