function canvasFunction(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(65, 50, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(110, 70);
    ctx.lineTo(150, 10);
    ctx.lineTo(190, 70);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

}

canvasFunction();