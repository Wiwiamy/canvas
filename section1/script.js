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


ctx.clearRect(150,150,100,100);