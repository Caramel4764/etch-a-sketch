const container = document.querySelector('#container');
let width = 20;
for (let i = 0; i < width; i++) {
  for (let i = 0; i < width; i++) {
    let newPixel = document.createElement("div");
    newPixel.style.width = 600/width + 'px' ;
    newPixel.style.height = 600/width + 'px';
    newPixel.classList.add("pixel");
    container.appendChild(newPixel);
  }
}
