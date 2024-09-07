
let cur=0;
let ran;
let score=0;

function setup() {
  createCanvas(720, 400);
  ran=random(45,width-45);

}

function draw() {
  // put drawing code here
  background(0);
  displayStartMessage();
  fill(255)
  
  ellipse(ran,cur,32,32);
  rect(mouseX,height-45,60,32);
  cur+=3
  

  if (((cur>=height-45))&(((mouseX+60)>=ran)&(mouseX<=ran))) {
    score +=1;
    cur=0;
    ran=random(45,width-45);
  }
  if (cur>=height){
    cur=0;
    score=score-1;
    ran=random(45,width-45);
  }

  

}

function displayStartMessage() {
  textSize(20);
  textAlign(CENTER);

  //Add font
  textFont('Courier New');
  fill(255, 0, 0);
  text(`Score : ${score}`, width*(7/8), height/8);
}
