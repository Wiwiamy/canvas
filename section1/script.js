var canvas = document.getElementById("myCan");
var ctx = canvas.getContext('2d');
//relleno
ctx.fillStyle = 'white';
ctx.fillRect(100,100,100,100); //x, y, w, h

//borde
ctx.strokeStyle = 'white';
ctx.strokeRect(300, 300, 100, 100); //x, y, w, h

ctx.fillStyle = 'yellow';
ctx.shadowColor = 'black';
ctx.shadowOffsetX = -10;
ctx.shadowOffsetY = -10;
ctx.shadowBlur = 20;

ctx.rect(200, 200, 100, 100); //x, y, w, h
ctx.stroke();
ctx.fill();

ctx.beginPath();
//ctx.clearRect(0,0,640,480);

ctx.shadowColor = 'black';
ctx.shadowOffsetX = -20;
ctx.shadowOffsetY = -20;
ctx.shadowBlur = 10;
ctx.strokeStyle = 'purple';
ctx.moveTo(200,200);
ctx.lineTo(200, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 200);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();
