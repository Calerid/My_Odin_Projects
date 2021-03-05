const gridContainer = document.querySelector('gridContainer')
const gridButton = document.querySelector('#gridButton')

gridButton.addEventListener("click", gridPrompt);

function gridPrompt(){
  const gridInput = prompt("Please enter a number 1-64")
  if (gridInput > 64 || gridInput < 1 || Number.NaN(gridInput)){
    alert("Not a valid input");
    gridPrompt();
  } else {
    return gridInput;
  }
}