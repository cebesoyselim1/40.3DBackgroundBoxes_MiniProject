const boxContainer = document.querySelector(".boxes")
const boxes = document.querySelectorAll(".box");
const magicBtn = document.querySelector(".btn-magic");

boxes.forEach((box,index) => {
    box.style.backgroundPosition = `${125 * (index % 4)}px ${-125 * Math.floor(index / 4)}px`;
})

magicBtn.addEventListener("click", (e) => {
    boxContainer.classList.toggle("active");
})