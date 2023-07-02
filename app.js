"use strict";

const boxes = document.querySelectorAll(".calculator-body");

boxes.forEach((box) => {
  box.addEventListener("mousemove", rotate);
  box.addEventListener("mouseout", remove);
});

function rotate(e) {
  let halfHeight = this.offsetHeight / 2;
  let x = e.offsetX - halfHeight;
  let y = e.offsetY - halfHeight;
  this.style.transform = `rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
}
function remove() {
  this.style.transform = `rotate(0)`;
}
