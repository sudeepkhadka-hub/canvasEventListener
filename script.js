const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let drawing = false;

canvas.addEventListener('mousedown', () => {
    drawing = true;
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); 
});

canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return; 

    ctx.lineWidth = 5; 
    ctx.lineCap = 'round'; 
    ctx.strokeStyle = 'black'; 

    ctx.lineTo(event.clientX, event.clientY); 
    ctx.stroke(); 
    ctx.beginPath(); 
    ctx.moveTo(event.clientX, event.clientY);
}

