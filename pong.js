// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2



function preload() {
   img = loadImage('pingpong table.png');

  soundFormats("wav");
  pong = loadSound("pong.wav");
  
  soundFormats("mp3");
  miss = loadSound("miss.mp3");

}

function setup() {
  createCanvas(600, 400);
   
}

function draw() {
  background(200);
  image(img, -40, 0);
  //score L
  text (("Score:"+scoreL),200,20)
  text (("Score:"+scoreR),400,20)

  // draw left player
  fill(200,0,0);
  rect(0, playerL, playerWidth, playerHeight);

  // draw right player
  rect(width - playerWidth, playerR, playerWidth, playerHeight);

  // draw ball
  fill(255,255,0)
  ellipse(ballX, ballY, ballSize)
  fill(0);


  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }

  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }

  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }

  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }

  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed

  // Bounce off top wall
  if (ballY < 20) {
    ballY = 20;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height-20) {
    ballY = height-20;
    ballYSpeed = -ballYSpeed;
  }


  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
    pong.play();
  }

  // bounce off left player
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = playerWidth
    ballXSpeed = -ballXSpeed
    pong.play();
  }

  // playerL scores!
  if (ballX > width) {
    ballX = width / 2
    ballY = random(height / 4,height-height / 4)
    scoreL = scoreL + 1
    ballXSpeed = -ballXSpeed
  miss.play();
   
  }

  // playerR scores!
  if (ballX < 0) {
    ballX = width / 2
    ballY = random(height / 4,height-height / 4)
    scoreR = scoreR + 1
    ballXSpeed = -ballXSpeed
   miss.play();
  }

}
