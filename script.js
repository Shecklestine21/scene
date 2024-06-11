//canvas - fishing scene

//canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 400, 400)

//water
ctx.fillStyle = `blue`;
ctx.fillRect(0, 250, 400, 150)

//pier landing
ctx.fillStyle = `brown`;
ctx.fillRect(0, 200, 250, 25)

// pier posts
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";

ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(10, 400);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";

ctx.beginPath();
ctx.moveTo(60, 150);
ctx.lineTo(60, 400);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";

ctx.beginPath();
ctx.moveTo(105, 150);
ctx.lineTo(105, 400);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";

ctx.beginPath();
ctx.moveTo(145, 150);
ctx.lineTo(145, 400);
ctx.stroke();

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 50, 20, 0, 2*Math.PI);
ctx.fill();

//fish heads
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(220, 300, 10, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle = "grey";
ctx.beginPath();
ctx.arc(280, 380, 10, 0, 2*Math.PI);
ctx.fill();

//fish tails
ctx.beginPath();
ctx.moveTo(300,370);
ctx.lineTo(300,390);
ctx.lineTo(280,380);
ctx.lineTo(300,370);
ctx.fill();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(220,300);
ctx.lineTo(240,290);
ctx.lineTo(240,310);
ctx.lineTo(220,300);
ctx.fill();

//stickman

//head
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(250, 140, 15, 0, 2*Math.PI);
ctx.stroke();

//torso
ctx.beginPath();
ctx.moveTo(248,155);
ctx.lineTo(243,195);
ctx.stroke()

//upperleg
ctx.beginPath();
ctx.moveTo(243,195);
ctx.lineTo(265,205);
ctx.stroke()

//lowerleg
ctx.beginPath();
ctx.moveTo(265,205);
ctx.lineTo(270,230);
ctx.stroke()

//arm
ctx.beginPath();
ctx.moveTo(246,170);
ctx.lineTo(280,180);
ctx.stroke()

//fishing pole
ctx.strokeStyle = "gray";
ctx.lineWidth =5;
ctx.beginPath();
ctx.moveTo(275,190);
ctx.lineTo(350,100);
ctx.stroke()

//fising line
ctx.strokeStyle = "white"
ctx.lineWidth =1;
ctx.beginPath();
ctx.moveTo(350,100);
ctx.lineTo(350,300);
ctx.stroke()

//cloud img
var cloudImg = document.getElementById("cloudEl");
ctx.drawImage(cloudImg, 150, 9, 90, 90 );
ctx.drawImage(cloudImg, 300, 30, 90, 90 );

//text
ctx.font = "10px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Riley Hodder", 310, 375)













