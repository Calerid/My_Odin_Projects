const gridContainer = document.querySelector("#grid");
const gridSizeSet = document.querySelector("#set_grid");

gridSizeSet.addEventListener("click", setGridSize);

function setGridSize() {
  let newSize = prompt("Set the board size");
  if (newSize < 1 || newSize > 64) {
    alert("Please enter a number from 1-64");
    setGridSize();
  } else {
    return newSize;
  }
}
