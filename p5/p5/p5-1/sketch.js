function setup() {
  createCanvas(windowWidth,windowHeight)
  background("white");
  x=40;

}

function draw() {
noStroke();
x = x + 30;

if(x> width)  {
  x=0;
  }
  let from = color("pink", "salmon", "orange");
  let to = color("yellow", "green", "aqua");
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

fill(from);
rect(x, 100, 50, 100);
fill(interA);
rect(x, 300, 50, 100);
fill(interB);
rect(x, 500, 50, 100);
fill(to);
rect(x, 700, 50, 100);
}
