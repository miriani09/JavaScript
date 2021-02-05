function canvasFunction(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.arc(150, 75, 70, 0 , Math.PI * 2, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(121, 60, 10, 0 , Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(180, 60, 10, 0 , Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(150, 100, 30, 0, 1 * Math.PI ,true);
    // ctx.stroke();
    // ctx.closePath();

    ctx.beginPath();
    ctx.arc(150, 90, 40, 0, Math.PI * 1,false);
    ctx.stroke();
    ctx.closePath();
}

canvasFunction()
