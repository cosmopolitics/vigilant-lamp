  function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("sketch-container")
  }
 
  function seaweed(x, y) {
    noStroke();
    fill(150,200,0);
    triangle(x, y, x-10, y-10, x+10, y-10);
    rect(x-10, y-15, 20, 5);
    circle(x-5, y-15, 10);
    circle(x+5, y-15, 10);
  }
  
  
  function draw() {
    background(0, 0, 255);
    
    noStroke();
    fill(color(242, 212, 128));
    rect(0, 292, 400, 188);
    
    for (let i=0; i<7; i++) {
      let heights = i*15+210; // loop builds more units and this variable handles the spacing 
      seaweed(300, heights);  //between the unit and origin unit(y axis) */
    }
    
    for (let i=0; i<10; i++) {
      let heights = i*15+250; 
      seaweed(82, heights);
    }
    
    for (let i=0; i<13; i++) {
      let heights = i*15+150; 
      seaweed(191, heights);
    }  
    
    for (let i=0; i<8; i++) {
      let heights = i*15+260; 
      seaweed(336, heights);
    }  
    
    noStroke();
    fill(color(255, 125, 100)); //tail
    triangle(215, 200, 250, 158, 250, 249);
    
    fill(color(255, 125, 100));
    triangle(216, 170, 253, 158, 232, 197); //top filler
    
    fill(0, 0, 255);
    circle(232, 157, 40); //tail contour
      
    fill(color(255, 125, 100));
    triangle(216, 230, 253, 242, 222, 203); // bottom filler
    
   
    fill(0, 0, 255);
    circle(232, 243, 40); //bottom tail contour  
  
    stroke("black");
    fill(color(255, 125, 100));
    triangle(184, 222, 224, 213, 212, 248); //little bottom fin
    
    push();
    noStroke();
    fill(color(255, 125, 100)); //body
    circle(190, 200, 80);
    
    fill(color(0, 0, 0)); //eye
    circle(161, 190, 15);
  
    pop();
    
    stroke("black");
    fill(color(255, 125, 100));
    triangle(177, 222, 212, 222, 205, 248); //little bottom fin
    
    noStroke();
    rect(176, 219, 38, 4); // top of the fin line delete
  }