var canvas = document.getElementById('myCan');
var ctx = canvas.getContext('2d');
//global cache
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
var drawGrid = function drawGrid(){
  var x = 0;
  var y = 50;
  var cen = 200;
  var w = 12.5;
  var h = 12.5;
  for (var i =1; i< 16; i++){
    x = cen -12.5;
    if( i % 2 !== 0){
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.fillStyle = "#f9f";
      ctx.fill();
      ctx.closePath();
    }
    x += 25;
  }
}
var drawDot =  function drawDot(obj){
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}


var drawPins = function drawPins(){
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

var drawZones = function drawZones(){
//histogram
  drawStart();
  drawHist();
  drawGrid();
  drawPins();

//top partition

};
/*
global values: canvas h/w, h/w of each object,
objects: pins, histogram, ballqueue, ball constructor, */




drawZones();
