function preload(){
  // put preload code here
}

function setup() {
  createCanvas(1000,1000)
  background("teal");
  angleMode(DEGREES);
  // put setup code here
}

function draw() {
  // put drawing code here
  push();
  translate(500,150,50);
    strokeWeight(0.8);
  stroke(color("blue"));
  noFill();
  rotate(frameCount * 8);
  ellipse(10, 36, 45, 45);
  pop();


  push();
  translate(500,150,50);
    strokeWeight(0.8);
  stroke(color("orange"));
  noFill();
  rotate(frameCount * 8);
  square(30, 20, 55, 20, 15, 10, 5);
  pop();


  push();
  translate(500,850,50);
    strokeWeight(0.8);
  stroke(color("orange"));
  noFill();
  rotate(frameCount * 8);
  triangle(20, 50, 90, 90, 20, 20);
  pop();

  push();
  translate(150,500,0);
    strokeWeight(0.8);
  stroke(color("orange"));
  noFill();
  rotate(frameCount * 8);
square(30, 20, 55);
  pop();

  push();
  translate(150,500,0);
    strokeWeight(0.8);
  stroke(color("purple"));
  noFill();
  rotate(frameCount * 6);
  square(30, 20, 55);
  pop();



  push();
  translate(850,500,0);
    strokeWeight(0.8);
  stroke(color("blue"));
  noFill();
  rotate(frameCount * 8);
  square(30, 20, 55);
  pop();

  push();
  translate(850,500,0);
    strokeWeight(0.8);
  stroke(color("orange"));
  noFill();
  rotate(frameCount * 6);
  square(30, 20, 55);
  pop();

  push();
  translate(500,850,50);
    strokeWeight(0.8);
  stroke(color("purple"));
  noFill();
  rotate(frameCount * 8);
  ellipse(20, 46, 55, 55);
  pop();

  push();
  translate(500,850,50);
    strokeWeight(0.8);
  stroke(color("orange"));
  noFill();
  rotate(frameCount * 8);
  line(20, 50, 90, 90, 20);
  pop();

translate(width / 2, height / 2);
  rotate(frameCount);
  noFill();
  strokeWeight(1);
  stroke(color("purple"));
line(40, 50, 100, 100, 40);



push();
  strokeWeight(1);
stroke(color("blue"));
translate(40,50,0);
rotate(frameCount * 4);
line(100,100,50,50,100);
pop();



push();
  strokeWeight(0.8);
stroke(color("orange"));
rotate(frameCount * 8);
ellipse(56, 46, 55, 55);
pop();

push();
  noFill();
stroke(color("blue"));
strokeWeight(0.2);
translate(width / 4, height / 4);
rotate(frameCount * 8);
ellipse(40, 60, 100, 100, 60);
pop();


if(frameCount == 360){
noLoop();

}












}
