var canvas = document.getElementById('myCan');
var ctx = canvas.getContext('2d');

//global variables
var canH = canvas.height;
var canW = canvas.width;
var histH = 200;
var histY = canH - histH;
var padT = 50;
var pins = [];
var scale = 25;
var center = canW/2;
var pinY = padT + scale;
var pinX = center;


// drawing shapes
var drawDot =  function drawDot(obj){
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}
var drawBox = function drawBox(obj){
  ctx.beginPath();
  ctx.rect(obj.x, obj.y, obj.w, obj.h);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
  }


//these are temp for looks
var drawHist = function drawHist(){
  ctx.beginPath();
  ctx.rect(0, histY, canW , histH);
  ctx.fillStyle = "#adf";
  ctx.fill();
  ctx.closePath();
}
var drawStart = function drawStart(){
  ctx.beginPath();
  ctx.rect(0,0, canW, padT);
  ctx.fillStyle = "#9f9";
  ctx.fill();
  ctx.closePath();
}

//this ones a keeper
var drawPins = function drawPins(){
  pinX = center;
  pinY = padT + scale;
  var pin = {
    x : pinX,
    y : pinY,
    r : 4,
    color: "#f06"
  };
  while (pinX < canW ){
    while (pin.y < histY){
      pins.push([pin.x,pin.y]);
      drawDot(pin);
      pin.x -= scale/2;
      pin.y += scale;
    }
    pinX += scale/2;
    pinY += scale;
    pin.x = pinX;
    pin.y = pinY;
  }
}

//more testing
var bounceL = function bounceL(ball){
  ball.xd = -3;
  ball.yd = -3;
}
//testing
var balld = 3;
var ballObj = {x: center, y: 0, xd: 0, yd : 3, color:'#f9f', r: 4};
var dropBall = function dropBall(ball){

  ball.x += ball.xd;
  ball.y += ball.yd;
  if (ball.y >= 72){
    bounceL(ball);
  }
/*  if (ball.x % scale === 0){
    ball.xd = 0;
  }*/
  drawDot(ball);
};


var draw = function draw(){
  ctx.clearRect(0,0,canW,canH);
  drawStart();
  drawHist();
  drawPins();
  dropBall(ballObj);
}

setInterval(draw, 1000/30)
/*
global values: canvas h/w, h/w of each object,
objects: pins, histogram, ballqueue, ball constructor,

ball drops
  when ball.x = first dot.x
      new ball is added to drop queue
      random function
        if 1 or 0,
          left or right function.
  until ball hits histogram.
    what part of histogram did the ball hit?
      the height of that box grows
      the number of that box grows
    ball is removed from queue
 */
