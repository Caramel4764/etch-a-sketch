const container = document.querySelector('#container');
let width = 20;
let mouseDown = false;
container.addEventListener('mousedown', ()=>{
  mouseDown = true;
})
container.addEventListener('mouseup', ()=>{
  mouseDown = false;
})
for (let i = 0; i < width; i++) {
  for (let i = 0; i < width; i++) {
    let newPixel = document.createElement("div");
    newPixel.style.width = 600/width + 'px' ;
    newPixel.style.height = 600/width + 'px';
    newPixel.classList.add("pixel");
    newPixel.addEventListener('mouseover', ()=> {
      if (mouseDown) {
      newPixel.style.backgroundColor = 'black';
      }
    })
    container.appendChild(newPixel);
  }
}
