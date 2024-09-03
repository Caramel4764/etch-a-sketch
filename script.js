const container = document.querySelector('#container');
const opacityMask = document.querySelector('#opacity-mask')
let mouseDown = false;
opacityMask.style.opacity = 0;
let penColor = 'black';
function getRandomPenColor() {
  let ranRed = Math.floor(Math.random()*256);
  let ranGreen = Math.floor(Math.random()*256);
  let ranBlue = Math.floor(Math.random()*256);
  penColor = `rgb(${ranRed}, ${ranGreen}, ${ranBlue})`;
}
getRandomPenColor()
container.addEventListener('mousedown', ()=>{
  mouseDown = true;
})
container.addEventListener('mouseup', ()=>{
  mouseDown = false;
  getRandomPenColor()
  if (parseFloat(opacityMask.style.opacity) <= 0.9) {
    opacityMask.style.opacity = parseFloat(opacityMask.style.opacity)+0.1;
    console.log(opacityMask.style.opacity)
  }
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
      newPixel.style.width = 600/width + 'px';
      newPixel.style.zIndex = 2;
      newPixel.style.height = 600/width + 'px';
      newPixel.classList.add("pixel");
      newPixel.addEventListener('mousemove', ()=> {
        if (mouseDown) {
          newPixel.style.backgroundColor = penColor;
        }
      })

      newPixel.addEventListener('mousedown', ()=> {
        newPixel.style.backgroundColor = penColor;
      })
      container.appendChild(newPixel);
    }
  }
}
let width = prompt("Please enter the size of your canvas (100 is max)");
drawBoard(width);