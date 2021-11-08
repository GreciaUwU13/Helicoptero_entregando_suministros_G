/*class ground{
constructor(x, y, width, height){

  var options = {
    isStatic : true
  } 
    this.suelo = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    world.add(world, this.suelo);
}
   display (){
       var pos = this.suelo.position;
       rectMode(CENTER);
       fill(255);
       rect(pos.x, pos.y, this.width, this.height);
       pop();
   }
}*/


class ground {
  constructor(x, y, width, height) {
   var options = {
       isStatic: true
   }   
  this.suelo = Bodies.rectangle(x,y,width,height,options); 
  this.width = width;
  this.height = height;
  World.add(world, this.suelo);
  }

  display(){
  var pos = this.suelo.position;

  var angle = this.suelo.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill(255);
  rect(0,0,this.width,this.height);
  pop();
  }
}