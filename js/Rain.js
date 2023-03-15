
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
resize();
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}




    document.addEventListener("click", (e) =>  {
        let x = Math.floor(Math.random() * ctx.canvas.width);
        let y = Math.floor(Math.random() * ctx.canvas.height);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x-20, y-25, x+30, y-100);
        ctx.quadraticCurveTo(x+88, y-25, x+60, y);
        ctx.bezierCurveTo(x+43,y+20,x+20,y+20,x,y);
        ctx.fillStyle = '#6E8EF7';
        ctx.fill();
    })

