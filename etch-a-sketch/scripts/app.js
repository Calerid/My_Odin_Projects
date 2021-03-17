const DEFAULT_GRID = 16;

function getGridSize() {
  var gridSize = document.getElementById("iputGridSize").value;
  console.log(gridSize);
  if (gridSize > 64 || gridSize < 1 || isNaN(gridSize)){
    alert("Please enter a valid number between 1 & 64");
    gridSize = DEFAULT_GRID;
  }
}