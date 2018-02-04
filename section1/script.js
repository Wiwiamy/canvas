var canvas = document.getElementById("myCan");
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(100,100,100,100); //x, y, w, h
ctx.strokeRect(300, 300, 100, 100); //x, y, w, h
ctx.fillStyle = 'yellow';
ctx.rect(200, 200, 100, 100); //x, y, w, h
ctx.stroke();
ctx.fill();

ctx.clearRect(150,150,100,100);