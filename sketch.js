var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  for(var k = 0; k <=width; k = k = 80 ){
    divisions.push(new divisions(k, height -divisionHeight/2,10, divisionHeight));
  }

  for(var j = 40; j <=width; j=j+50){

    plinkos.push(new plinkos(j,75));

  }
  for(var j = 15; j <=width-10; j=j+50){

    plinkos.push(new plinkos(j,175));

  }

}

function draw() {
  background("black");
  drawSprites();
}