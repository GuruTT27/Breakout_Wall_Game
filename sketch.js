var paddle;
var ball;
var rightWall,leftWall,topWall;
var life = 5;
var h1,h2,h3,h4,h5;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20
,b21,b22,b23,b24,b24,b26,b27,b28,b29,b30;

var gameOver,gameOveri;

var bl,bla;

var win,wim;

var wa,wal,wan,wann;

var wallHitSound,paddleHitSound,brickHitSound,crashSound;

var hi;
var score = 0;

function preload(){

  hi = loadImage("lives.png");
  gameOveri = loadImage("gameOveri.png");
  wim = loadImage("you win.png");

  wallHitSound = loadSound("wall.m4a");
  paddleHitSound = loadSound("paddle.m4a");
  brickHitSound = loadSound("brick.m4a");
  crashSound = loadSound("crash.aac");

}

function setup() {
  createCanvas(600,800);
  paddle = createSprite(300, 700, 80, 20);
  paddle.shapeColor = "orange";

  gameOver = createSprite(300,400,0.05,0);

  ball = createSprite(200,400,10,10);
  ball.velocityX = 5;
  ball.velocityY = 5;
  ball.shapeColor = "skyblue"

  rightWall = createSprite(605,450,10,700);
  rightWall.shapeColor = "white";

  leftWall = createSprite(-5,450,10,700);
  leftWall.shapeColor = "white";

  topWall = createSprite(300,100,600,10);
  topWall.shapeColor = "white";

  h1 = createSprite(410,70,50,50);
  h1.addImage(hi);
  h1.scale = 0.1;

  h2 = createSprite(445,70,50,50);
  h2.addImage(hi);
  h2.scale = 0.1;

  h3 = createSprite(480,70,50,50);
  h3.addImage(hi);
  h3.scale = 0.1;

  h4 = createSprite(515,70,50,50);
  h4.addImage(hi);
  h4.scale = 0.1;

  h5 = createSprite(550,70,50,50);
  h5.addImage(hi);
  h5.scale = 0.1;

  b1 = createSprite(30,130,50,20);
  b1.shapeColor = "blue";

  b2 = createSprite(90,130,50,20);
  b2.shapeColor = "blue";

  b3 = createSprite(150,130,50,20);
  b3.shapeColor = "blue";

  b4 = createSprite(210,130,50,20);
  b4.shapeColor = "blue";

  b5 = createSprite(270,130,50,20);
  b5.shapeColor = "blue";

  b6 = createSprite(330,130,50,20);
  b6.shapeColor = "blue";

  b7 = createSprite(390,130,50,20);
  b7.shapeColor = "blue";

  b8 = createSprite(450,130,50,20);
  b8.shapeColor = "blue";

  b9 = createSprite(510,130,50,20);
  b9.shapeColor = "blue";

  b10 = createSprite(570,130,50,20);
  b10.shapeColor = "blue";
  


  b11 = createSprite(30,160,50,20);
  b11.shapeColor = "green";

  b12 = createSprite(90,160,50,20);
  b12.shapeColor = "green";

  b13 = createSprite(150,160,50,20);
  b13.shapeColor = "green";

  b14 = createSprite(210,160,50,20);
  b14.shapeColor = "green";

  b15 = createSprite(270,160,50,20);
  b15.shapeColor = "green";

  b16 = createSprite(330,160,50,20);
  b16.shapeColor = "green";

  b17 = createSprite(390,160,50,20);
  b17.shapeColor = "green";

  b18 = createSprite(450,160,50,20);
  b18.shapeColor = "green";

  b19 = createSprite(510,160,50,20);
  b19.shapeColor = "green";

  b20 = createSprite(570,160,50,20);
  b20.shapeColor = "green";


  b21 = createSprite(30,190,50,20);
  b21.shapeColor = "yellow";

  b22 = createSprite(90,190,50,20);
  b22.shapeColor = "yellow";

  b23 = createSprite(150,190,50,20);
  b23.shapeColor = "yellow";

  b24 = createSprite(210,190,50,20);
  b24.shapeColor = "yellow";

  b25 = createSprite(270,190,50,20);
  b25.shapeColor = "yellow";

  b26 = createSprite(330,190,50,20);
  b26.shapeColor = "yellow";

  b27 = createSprite(390,190,50,20);
  b27.shapeColor = "yellow";

  b28 = createSprite(450,190,50,20);
  b28.shapeColor = "yellow";

  b29 = createSprite(510,190,50,20);
  b29.shapeColor = "yellow";

  b30 = createSprite(570,190,50,20);
  b30.shapeColor = "yellow";
  
}

function draw() {
  background(0);

  // paddle.x = ball.x

  if(frameCount <200){

    wa = createSprite(230,400,10,60);
    wa.shapeColor = 0

    wal = createSprite(170,400,10,60);
    wal.shapeColor = 0

    wan = createSprite(200,425,60,10);
    wan.shapeColor = 0

    wann =createSprite(200,375,60,10);
    wann.shapeColor = 0

    ball.bounceOff(wa);
    ball.bounceOff(wal);
    ball.bounceOff(wan);
    ball.bounceOff(wann);

    ball.shapeColor = 0;

    fill("white");
    textSize(20);
    text("Make the ball bounce off the paddle",100,250);
    text("If you lose all the five lives you lose",100,300);
    text("If you destroy more than 25 out of 30 blocks you win",100,350);
    text("Hint: Use arrow keys to navigate the paddle",100,500);
    text("and also wait for the ball to come",100,550);

  }
  else{ball.shapeColor = "skyblue"}

  fill("white");
  textSize(20);
  text("Lives: (" + life + ")",300,80);

  text("Score: " + score,50,80)

  textSize(140);
  text("l",270,100);
  
  
  if(keyDown(RIGHT_ARROW)){

    paddle.x +=10

  }

  if(keyDown(LEFT_ARROW)){

    paddle.x -=10

  }

  if(paddle.x>567){

    paddle.position.x = 567;

  }

  if(paddle.x<34){

    paddle.position.x = 34;

  }

  if(ball.y>900){

    crashSound.play();

    ball.x = 200;
    ball.y = 400;

    life -= 1;

  }

  if(score === 25){

    bla = createSprite(300,160,600,90);
    bla.shapeColor = 0;

    win = createSprite(300,400);
    win.addImage(wim);
    ball.destroy();
    paddle.destroy();

  }

  if(ball.isTouching(paddle)){

    ball.bounceOff(paddle);
    paddleHitSound.play();

  }

  if(ball.isTouching(rightWall) || ball.isTouching(leftWall || ball.isTouching(topWall))){

    wallHitSound.play();

  }

    ball.bounceOff(rightWall);
    ball.bounceOff(leftWall);
    ball.bounceOff(topWall);

  deductLife();

  destroyBricks();
  
  drawSprites();
}

function deductLife(){

  if(life === 4){

    h5.destroy();

  }

  if(life === 3){

    h4.destroy();

  }

  if(life === 2){

    h3.destroy();

  }

  if(life === 1){

    h2.destroy();

  }

  if(life === 0){

    h1.destroy();
    reset();

  }

}

  function destroyBricks(){

    if(ball.isTouching(b1)){

      brickHitSound.play();
      ball.bounceOff(b1);
      b1.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b2)){

      brickHitSound.play();
      ball.bounceOff(b2);
      b2.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b3)){

      brickHitSound.play();
      ball.bounceOff(b3);
      b3.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b4)){

      brickHitSound.play();
      ball.bounceOff(b4);
      b4.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b5)){

      brickHitSound.play();
      ball.bounceOff(b5);
      b5.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b6)){

      brickHitSound.play();
      ball.bounceOff(b6);
      b6.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b7)){

      brickHitSound.play();
      ball.bounceOff(b7);
      b7.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b8)){

      brickHitSound.play();
      ball.bounceOff(b8);
      b8.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b9)){

      brickHitSound.play();
      ball.bounceOff(b9);
      b9.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b10)){

      brickHitSound.play();
      ball.bounceOff(b10);
      b10.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b11)){

      brickHitSound.play();
      ball.bounceOff(b11);
      b11.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b12)){

      brickHitSound.play();
      ball.bounceOff(b12);
      b12.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b13)){

      brickHitSound.play();
      ball.bounceOff(b13);
      b13.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b14)){

      brickHitSound.play();
      ball.bounceOff(b14);
      b14.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b15)){

      brickHitSound.play();
      ball.bounceOff(b15);
      b15.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b16)){

      brickHitSound.play();
      ball.bounceOff(b16);
      b16.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b17)){

      brickHitSound.play();
      ball.bounceOff(b17);
      b17.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b18)){

      brickHitSound.play();
      ball.bounceOff(b18);
      b18.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b19)){

      brickHitSound.play();
      ball.bounceOff(b19);
      b19.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b20)){

      brickHitSound.play();
      ball.bounceOff(b20);
      b20.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b21)){

      brickHitSound.play();
      ball.bounceOff(b21);
      b21.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b22)){

      brickHitSound.play();
      ball.bounceOff(b22);
      b22.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b23)){

      brickHitSound.play();
      ball.bounceOff(b23);
      b23.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b24)){

      brickHitSound.play();
      ball.bounceOff(b24);
      b24.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b25)){

      brickHitSound.play();
      ball.bounceOff(b25);
      b25.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b26)){

      brickHitSound.play();
      ball.bounceOff(b26);
      b26.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b27)){

      brickHitSound.play();
      ball.bounceOff(b27);
      b27.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b28)){

      brickHitSound.play();
      ball.bounceOff(b28);
      b28.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b29)){

      brickHitSound.play();
      ball.bounceOff(b29);
      b29.destroy();
      score +=1;
  
    }

    if(ball.isTouching(b30)){

      brickHitSound.play();
      ball.bounceOff(b30);
      b30.destroy();
      score +=1;
  
    }
  
  }

function reset(){

  bl = createSprite(300,160,600,90);
  bl.shapeColor = 0;

  gameOver.addImage(gameOveri);
  gameOver.scale = 0.9;

  ball.destroy();
  paddle.destroy();

}