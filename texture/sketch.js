const a=25;
const b=100;
const c=175;
const d=250;
const e=325;
const f=400;
const g=475;
const h=550;
const l=625;
const m=700;
const n=775;
const o=850;
const p=925;
const q=1000;

const k=50;


const colorPalette=["red", "gold", "orange", "indianred"];
const colorPalette2=["white","gainsboro", "black", "silver"];





function setup() {
  createCanvas(windowWidth,windowHeight)
  background("black");
  x= 10;


}

function draw() {
noStroke();
x = x + 10;

if(x> width)  {
  x=0;
  }
fill(random(193), random(245), 205);


if(mouseX >  windowWidth/2) {
fill(color(random(colorPalette)));
}

if(mouseIsPressed) {
fill(color(random(colorPalette2)));
}


rect(x, a, a, k);
rect(x, b, a, k);
rect(x, c, a, k);
rect(x, d, a, k);
rect(x, e, a, k);
rect(x, f, a, k);
rect(x, g, a, k);
rect(x, h, a, k);
rect(x, l, a, k);
rect(x, m, a, k);
rect(x, n, a, k);
rect(x, o, a, k);
rect(x, p, a, k);
rect(x, q, a, k);


fill("white");
textSize(20);
textFont('Verdana');
text("move mouse from right ro left to change color and press to get black and white", windowWidth/2, windowHeight/2);
}
