let myPersonalBubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 1; i++) {
    addBubble();
  }
}

function draw() {
  // put drawing code here
  background('pink');

  for(let i = 0; i < myPersonalBubbles.length; i++) {
    myPersonalBubbles[i].run();
  }
}

function mouseClicked() {
  addBubble();
}

function addBubble(){
  const r=random(255), g=random(255), b=random(255);
  const bubbleColor = color(r,g,b);
  const aNewBubble = new Bubble(random(windowWidth), random(windowHeight), random(10,100), bubbleColor)
  myPersonalBubbles.push(aNewBubble);
}

class Bubble {
  constructor(temp_x,temp_y,temp_r,temp_color) {
    this.x=temp_x;
    this.y=temp_y;
    this.r=temp_r;
    this.color=temp_color;
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,this.r*2);
    pop();
  }

  updatePosition() {
    this.x += random(-5,5)
    this.y += random(-5,5)
  }

  run() {
    this.updatePosition();
    this.display();
  }
}
