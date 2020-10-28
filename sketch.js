function preload(){
  // put preload code here
}

function setup() {
  createCanvas(900,900)
  background("teal");
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  // put drawing code here

translate(width / 2, height / 2);
  rotate(frameCount);
  noFill();
  strokeWeight(1.5);
  stroke(color("purple"));
line(80, 60, 200, 200, 60);


push();
  strokeWeight(0.8);
stroke(color("blue"));
rotate(frameCount * 8);
line(600,300,50,50,600);
pop();


push();
  strokeWeight(1);
stroke(color("orange"));
rotate(frameCount * 8);
ellipse(56, 46, 55, 55);
pop();


push();
  noFill();
stroke(color("pink"));
strokeWeight(1);
translate(width / 4, height / 4);
rotate(frameCount * 7);
ellipse(80, 80, 80, 80, 80);
pop();


if(frameCount == 360){
noLoop();


}












}
