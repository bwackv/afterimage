// var savedTime;
// var totalTime = 1000;

// function setup() {
//   createCanvas(400,400);
//   background(0,255,0);
//   savedTime = millis();
  
// }

// function draw() {
  
//   var passedTime = millis() - savedTime;
//   if (passedTime > totalTime) { //has 1 second passed?
//     background(255); //change BG to white
//     savedTime = millis(); //save current time to restart the timer
// }
// }

// var timeSinceStart;
// var m;

// void setup(){
//   timeSinceStart = millis(); // initialize here so it only happens once
//   background = (0,255,0);
// }

// void draw(){
//   m = millis(); // constantly update the variable

//   if(timeSinceStart + 1000 < m){
//     greenAverage = greenTotal/greenCount; // or whatever is outside while loop
//     timeSinceStart = millis();
//   }

//   //Anything that went inside the while loop can go here, or above the IF

// }

//https://stackoverflow.com/questions/27013314/how-can-i-change-background-color-in-a-while-loop-processing
// When dealing with timed events in Processing you should not use while loops inside the draw() function. The draw() function itself is a while loop which updates the "screen" each frame.
// So, what you should do is create a timer and let it do a switch for you inside the draw() function. In your case, if you want to start with a green screen, you do that in the setup() function, and then create a method for altering according to a timer in your draw() function.
// This is a suggestion on how you could solve your particular problem. Just change the cycle variable according to your need. In your case it would be 30000.

var s = function(p){
  
var isGreen = true; //this was boolean but p5 doesn't have it
var startTime = 0; //this was int but p5 doesn't have that
var lastTime = 0;
var cycle = 10000; //the cycle you need

p.setup = function(){
  p.createCanvas(400, 400);
  p.background(0, 255, 0); //green
}
p.draw = function(){
  startTime = p.millis();

  if (startTime > lastTime + cycle) {
    if (isGreen) {
      p.background(255); //white
      isGreen = !isGreen;
    } else {
      p.background(0, 255, 0); //green
      isGreen = !isGreen;
    }
    lastTime = p.millis();
  }
}
}
  var myp5 = new p5(s, 'c1');
  
//sketch 2
var t = function (p) {
  var isRed = true;
  var startTime = 0;
  var lastTime = 0;
  var cycle = 10000;
  
p.setup = function(){
  p.createCanvas(400,400)
  p.background(255,0,0)//start with red bg
  }
  
p.draw = function(){
  startTime = p.millis();
  if (startTime > lastTime + cycle){
    if(isRed) {
      p.background(255);
      isRed = !isRed
    }else{
      p.background(255,0,0);
      isRed = !isRed
   }
   lastTime = p.millis();
  }
 }
}

var myp5 = new p5(t,'c2');