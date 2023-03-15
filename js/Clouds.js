
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
resize();

// 캔버스 사이즈
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// 그림 이동시키기

let x = [0, 1, 2]
const vx = [6, 2, 4];
const cloudsimg1 = document.querySelector('.cloudsimg1');
const cloudsimg2 = document.querySelector('.cloudsimg2');
const cloudsimg3 = document.querySelector('.cloudsimg3');


function draw() {
    cloudsimg1.style.transform = `translateX(${x[0]}px)`;
    cloudsimg2.style.transform = `translateX(${x[1]}px)`;
    cloudsimg3.style.transform = `translateX(${x[2]}px)`;


}

function move() {
    draw();
    for (i = 0; i <= 2; i++) {
        x[i] += vx[i];
    }

    for (i = 0; i <= 2; i++) {
        if (x[i] >= cloudsimg1.width-250) {
            for (j = 0; j <= 2; j++) {
                vx[j] *= -1;
            }
        } else if (x[i] + cloudsimg1.width <= 1) {
            for (j = 0; j <= 2; j++) {
                vx[j] *= -1;
            }
        }
    }
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    move();
    requestAnimationFrame(animate);
}

animate();