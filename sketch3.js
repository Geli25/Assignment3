
var fallingobjects=[];
var r,g,b;

function setup(){
  createCanvas(1200, 800);
  for (var i=0;i<5;i++){
    fallingobjects[i]=new Falling();
  }
 r=random(255);
 g=random(255);
 b=random(255);
}

function draw(){
  background(0);
  for (var i=0;i<5;i++){
    fallingobjects[i].fall();
    fallingobjects[i].display();
  }
}

function Falling(){
  this.x=random(600,1000);
  this.y=random(-100,-600);
  this.z = random(1,5);
  this.w=random(10,300);
  this.h=random(10,500);
  this.speed=4;
  this.radius=random(10,100);
  this.fall=function(){
    this.y += this.speed;
    if (this.y>500){
      this.y=this.speed-1;
    }
  };

  this.display=function(){
    noFill();
    stroke(r,g,b);
    strokeWeight(this.z);
    rect(this.x,this.y,this.w,this.h);
    triangle(this.x,this.y,this.w,this.h,this.a,this.b);
    ellipse(this.x,this.y,this.w,this.w);
    };
  }


