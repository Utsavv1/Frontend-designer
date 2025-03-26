const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');

canvas.width = 500; // Adjust canvas size as needed
canvas.height = 400;

let isDrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = 'black'; // You can change the color here
  ctx.lineWidth = 2; // Adjust line width
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}


clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});