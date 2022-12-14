const canvas =  document.getElementById('canvas');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const updatesize = document.getElementById('updatesize');
const color = document.getElementById('coLor');
const ctx = canvas.getContext('2d');

let size =30;
let isPress = false;
let colors = 'black';
let x = undefined;
let y = undefined;



canvas.addEventListener('mousedown',(e)=>{
    isPress = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup',()=>{
    isPress = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove',(e)=>{
    if(isPress){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2,y2);
    drawLine(x,y,x2,y2);
    x = x2;
    y = y2;
    }

});

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = colors;
    ctx.lineWidth = size*2;
    ctx.stroke();

}

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle = colors;
    ctx.fill();

}

color.addEventListener('change',(e)=>{
     colors = e.target.value;

});

increase.addEventListener('click',()=>{
    size +=5;
    if(size>50){
        size = 50;
    }
    updateSize()
    });

decrease.addEventListener('click',()=>{
 size -=5;
 if(size<5){
     size =5;
 }
 updateSize()
});

function updateSize(){
    updatesize.innerHTML = size;
}
// color.add

// function draw(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     drawCircle(x,y);
//     requestAnimationFrame(draw);
// }
// draw();

// drawCircle(50,50);
