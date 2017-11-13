document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.querySelector("#canvas");
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "violet";
    ctx.fillRect(0, 0, 500, 500);

    let gradient = ctx.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, "violet");
    gradient.addColorStop(1, "blue");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.rect(50, 50, 400, 400);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(300,300,200,75,45* Math.PI/180, 0,2*Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke()

});