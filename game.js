const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

<canvas id="myCanvas" width="300" height="150"></canvas>
<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw black rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw white line in the middle
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Draw small light pink ball
    ctx.fillStyle = "lightpink";
    ctx.beginPath();
    ctx.arc(50, 50, 8, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
    ctx.fill();
</script>

