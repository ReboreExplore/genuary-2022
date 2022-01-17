let iteration = 0;
let bg;
// The statements in the setup() function
// execute once when the program begins
function setup() {
  //bg = loadImage('assets/Candy_landscape.jpg');
  createCanvas(1000,1000);
  frameRate(30);
  background(250, 218, 221);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw(){
  if(iteration<10000){
    candy_color = ['Aero Blue','Pale Lavender','Pastel Magenta','Cookies And Cream','Fresh Air'];
    rand_color = random(candy_color);
    if(rand_color=='Aero Blue'){
      r =211;
      g =248;
      b =226;
    }
    if(rand_color=='Pale Lavender'){
      r =228;
      g =193;
      b =249;
    }
    if(rand_color=='Pastel Magenta'){
      r =246;
      g =148;
      b =193;
    }
    if(rand_color=='Cookies And Cream'){
      r =237;
      g =231;
      b =177;
    }
    if(rand_color=='Fresh Air'){
      r =169;
      g =222;
      b =249;
    }
    x = random(height);
    y = random(width);
    radius = [80,50,60,40]
    rand_radius = random(radius);
    new_radius = rand_radius;
    for(let i = 0; i < 5;i++){
      stroke(100);
      if(i%2==0){
        fill(r,g,b);
        rand_radius = rand_radius-new_radius/10; 
      }
      else{
        fill(255);
        rand_radius = rand_radius-new_radius/4;
      }
      circle(x,y,rand_radius);
    }
    iteration = iteration+1;
  } 
else{
  background(bg);
  iteration = 0;
}
}

