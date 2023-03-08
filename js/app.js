
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
resize();

// 캔버스 사이즈
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// 원 그리기
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#FFFFFF";
ctx.fill();
ctx.stroke();
let x = 0;


function animate() {
    ctx.style.transfomr = `translateX(${x}px)`;
    
    x += 10;

    requestAnimationFrame(animate);
}

animate();