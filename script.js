const gridContainer = document.querySelector(".container");
let gridSizeRange = document.querySelector("#grid-size");
const applyBtn = document.querySelector(".apply");
const clearBtn = document.querySelector(".clear");
const defClrBtn = document.querySelector("#black");
const randClrBtn = document.querySelector("#random");

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

function randNum() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${randNum()},${randNum()},${randNum()})`;
}

document.addEventListener("DOMContentLoaded", () => {
  generateGrid();
  gridContainer.addEventListener("mouseover", (e) => {
    let colorPref = "black";
    if (e.target.className === "grid-item") {
      e.target.style.backgroundColor = colorPref;
    }
  });
});

applyBtn.addEventListener("click", () => {
  removeGrid();
  changeGridSize();
});

clearBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
});

defClrBtn.addEventListener("click", () => {
  gridContainer.addEventListener("mouseover", (e) => {
    let colorPref = "black";
    if (e.target.className === "grid-item") {
      e.target.style.backgroundColor = colorPref;
    }
  });
});

randClrBtn.addEventListener("click", () => {
  gridContainer.addEventListener("mouseover", (e) => {
    let colorPref = randomColor();
    if (e.target.className === "grid-item") {
      e.target.style.backgroundColor = colorPref;
    }
  });
});
