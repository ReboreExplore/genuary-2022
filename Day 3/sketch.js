let xi = 0;
let yi = 0;
let diameter = 20;
let x_inc = 5;
let y_inc = 5;
let colors = ['red','green','blue','purple','pink','yellow'];
let balls = [];
let ball_nos = 10; 
let winheight = 338;
let winwidth = 563;

class Balls{
  constructor(xi,yi,diameter,x_inc,y_inc,color){
    this.xi = xi;
    this.yi = yi;
    this.d = diameter;
    this.x_inc = x_inc;
    this.y_inc = y_inc;
    this.color = color;

  }
  show_ball(){
    fill(this.color);
    noStroke();
    ellipse(this.xi,this.yi,this.d);
  }
  move_ball(rand_move){
    if (this.xi>winwidth || this.xi<diameter/2){
      this.x_inc*=-1;
    }
    if (this.yi>winheight || this.yi<diameter/2){
      this.y_inc*=-1;
    }
    if(rand_move==1){
      this.xi= this.xi+ this.x_inc;
      this.yi= this.yi+ this.y_inc; 
    }
    else{
      this.xi= this.xi+ this.x_inc;
      this.yi= this.yi+ this.y_inc; 
    } 
  }
}

function setup() {
  bg = loadImage('assets/room.jpg');
  createCanvas(winwidth,winheight);
  background(bg);
  for(i=0;i<ball_nos;i++){
    xi = random(diameter,winwidth-5);
    yi = random(diameter,winheight-5);
    pres_color = random(colors);
    balls[i] = new Balls(xi,yi,diameter,x_inc,y_inc,'red');
  }
}

function draw() {
  background(bg);
  for(i=0;i<ball_nos;i++){
    rand_move = random([1,2]);    
    balls[i].show_ball();
    balls[i].move_ball(rand_move);

  }
}
