const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
resize();

// 캔버스 사이즈
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

const Snow = [];

// 눈 400개의 x, y, 크기, 속도, 방향 설정
function loop() {
    for(i=1; i<=400; i++){
        const x = Math.floor(Math.random()*window.innerWidth);
        const y = Math.floor(Math.random()*window.innerHeight);
        const size = Math.random()*2+0.7;
        const speed = Math.random()*0.3+0.5;
        const direction = Math.floor(Math.random()*3-1);

        Snow.push({x, y, size, speed, direction});
        
    } 
}

console.log(Snow);


//눈이 옆에 닿으면 반대 방향으로 튕기기, 가장 아래에 닿으면 위로 다시 떨어지게 하는 함수
function move() {
    Snow.map((item) => {
        item.x += item.speed * item.direction;
        item.y += item.speed;

        const minX = item.size;
        const maxX = window.innerWidth - item.size;
        const maxY = window.innerHeight - item.size;

        if(item.x <= minX || item.x >= maxX){
            item.direction *= -1;
        }else if(item.y >= maxY){
            item.y = 0;
        }

        return item;
    })
}


// 눈 그리기
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    move();
    Snow.forEach((item) => {
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.size, 0, 2 * Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
        })
}

loop();

function animate() {
    
    
    draw();
    requestAnimationFrame(animate);
}

animate();