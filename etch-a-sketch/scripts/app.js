const DEFAULT_GRID = 16;

function getGridSize() {
  var gridSize = document.getElementById("inputGridSize").value;
  if (gridSize > 64 || gridSize < 1 || isNaN(gridSize)){
    alert("Please enter a valid number between 1 & 64");
    gridSize = DEFAULT_GRID;
  } else {
    setGridSize(gridSize);
  }
}

function setGridSize(gridSize){
  let gridContainer = document.getElementById("gridContainer");
  for (i = DEFAULT_GRID; i < gridSize * gridSize; i++){
    
  }
}