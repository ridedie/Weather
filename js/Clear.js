
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
resize();

function fStyle() {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.stroke();
}

document.addEventListener("mousemove", (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 해 만들기
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY-150);
    ctx.lineTo(mouseX, mouseY-70);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX+100, mouseY-100);
    ctx.lineTo(mouseX+50, mouseY-50);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX+150, mouseY);
    ctx.lineTo(mouseX+70, mouseY);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX+100, mouseY+100);
    ctx.lineTo(mouseX+50, mouseY+50);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY+150);
    ctx.lineTo(mouseX, mouseY+70);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX-100, mouseY+100);
    ctx.lineTo(mouseX-50, mouseY+50);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX-150, mouseY);
    ctx.lineTo(mouseX-70, mouseY);
    fStyle();

    ctx.beginPath();
    ctx.moveTo(mouseX-100, mouseY-100);
    ctx.lineTo(mouseX-50, mouseY-50);
    fStyle();
})

