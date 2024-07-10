const container = document.querySelector('#container');
let mouseDown = false;
container.addEventListener('mousedown', ()=>{
  mouseDown = true;
})
container.addEventListener('mouseup', ()=>{
  mouseDown = false;
})
container.addEventListener('mouseleave', ()=>{
  mouseDown = false;
})
function newCanvas () {
  width = prompt("Please enter the size of your canvas (100 is max)");
  drawBoard(width);
}
const newCanvasBtn = document.querySelector('#page-size-div');
newCanvasBtn.addEventListener('click', ()=>{
  newCanvas();
})
const drawBoard = function (width) {
  container.textContent='';
  for (let i = 0; i < width; i++) {
    for (let i = 0; i < width; i++) {
      let newPixel = document.createElement("div");
      newPixel.style.width = 600/width + 'px' ;
      newPixel.style.height = 600/width + 'px';
      newPixel.classList.add("pixel");
      newPixel.addEventListener('mousemove', ()=> {
        if (mouseDown) {
          newPixel.style.backgroundColor = 'black';
        }
      })
      newPixel.addEventListener('mousedown', ()=> {
        newPixel.style.backgroundColor = 'black';
      })
      container.appendChild(newPixel);
    }
  }
}
let width = prompt("Please enter the size of your canvas (100 is max)");
drawBoard(width);