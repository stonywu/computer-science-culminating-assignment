let x; // set the position of the small ball
let y = 5; // set the position of the small ball
let circleA = 20; // the position of shoot ball
let circleB = 380; // the position of shoot ball
let drawLine = 0; // the line is false at first
let score = 0; // set the grade is 0 at first
let gameStart;
let gameStarted = 0; // flag to track if the game has started

function preload() {
  gameStart = loadImage('gameStart.jpg');// load the graph
} 

function setup() {
  createCanvas(400, 400);//create the draw canvas
  x = random(width);//the ball accur in the random position
}

function draw() {
  if (!gameStarted) { // if game hasn't started
    image(gameStart, 0, 0, width, height); // display the start image 
    return; // exit the draw function early
  }
  
  background(40);//draw the background
    
    if (score > 10) { // check if the score is greater than 10
      textSize(40); // set text size
      textAlign(CENTER, CENTER); // set text at the center
      fill(255); // set the color of the text
      text("You Win!", width / 2, height / 2); // show "You Win" if the score is greater than 10
      return; 
  }
  if (score < -10) { // check if the score is smaller that -10
    textSize(40); // set text size
    textAlign(CENTER, CENTER); // set text at the center
    fill(255); // the color
    text("You Lose!", width / 2, height / 2);  // "You Lose" if the score is smaller than 10
    return; 
}

  y += 1; // the ball keeps falling
  if (y > 350) {  //if y's position bigger than 350
    y = 0;// y become 0 which means it appear at top
    x = random(width); // when the ball falls, the ball will be in random position at top
    score -= 2; // decrease score if ball reaches the bottom without being hit
  }
  
  ellipse(circleA, circleB, 30); // set the shooter position
  noStroke();
  ellipse(x, y, 20); // set the position of the falling ball
 
  controlad(); //run function controlad

  fill(255); // set the color of the text
  noStroke();
  text('score: ' + score, 320, 320); // show the text at the edge of the canvas

  if (drawLine) {
    stroke(255, 0, 0); // set the color of the line
    strokeWeight(2); // set the line thickness
    line(circleA, circleB, circleA, 0); // draw the line
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW ) {
    drawLine = 1; // when you press the up arrow, the line will be drawn
    checkHit(); // check whether hit or not 
  } else if (keyCode === DOWN_ARROW) {
    drawLine = 0; // press down , the line disappear
  }
}

function controlad(){
  if (keyIsDown(68) === true){
    circleA += 3; // when press D(key68), the shooter keep moving right
  }
  if (keyIsDown(65) === true){
    circleA -= 3; // when press A(key65), the shooter keep moving left
  }
}

function checkHit() {
  // when hit the ball, the grade increate, the ball appear aother random position at top
  if (circleA - 10 < x && x < circleA + 10) {// check whether the ray hit the object or not
    score += 1; // socre +1
    y = 0;// the ball's y position appear at top
    x = random(width);//the ball appear in random position
  }
}

function mouseClicked() {
  if (!gameStarted && mouseButton === LEFT) { // check if game hasn't started and left mouse button is clicked
    gameStarted = 1; // mark the game as started
  }
}
//during the coding, i use many function, including loadimage, draw, and setup. for example, i
// use loadimage to load the game start image. this is 
