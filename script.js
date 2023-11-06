const gridContainer = document.querySelector(".container");
let gridSizeRange = document.querySelector("#grid-size");
const applyBtn = document.querySelector(".apply");
const clearBtn = document.querySelector(".clear");

let gridSize = gridSizeRange.value;

function generateGrid(size = gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    newDiv.textContent = "";
    gridContainer.appendChild(newDiv);
  }
}

function changeGridSize() {
  gridSizeRange = document.querySelector("#grid-size");
  gridSize = gridSizeRange.value;

  gridContainer.style["grid-template-columns"] = `repeat(${gridSize},1fr)`;
  gridContainer.style["grid-template-rows"] = `repeat(${gridSize},1fr)`;

  generateGrid(gridSize);
}

function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.lastChild.remove();
  }
  gridSizeRange = document.querySelector("#grid-size");
}

document.addEventListener("DOMContentLoaded", generateGrid);

applyBtn.addEventListener("click", () => {
  removeGrid();
  changeGridSize();
});
