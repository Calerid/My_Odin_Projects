let playerWins = 0;
let computerWins = 0;
let roundCount = 0;
let playerSelection = prompt(
  "Please enter Rock, Paper, or scissors"
).toLowerCase();

function computerPlay() {
  let rPSS = ["rock", "paper", "scissors"];
  let computerSelection = rPSS[Math.floor(Math.random() * rPSS.length)];
  return computerSelection;
}

function roundCounter(roundCount) {}

function rock() {
  if (computerSelection === "rock") {
    console.log("This round was a draw! Try again!");
    roundCount += 1;
    playerSelects();
  } else if (computerSelection === "paper") {
    console.log("You Lose! ${computerSelection} beats Rock!");
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function paper() {
  if (computerSelection === "rock") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    roundCount += 1;
    playerSelects();
  } else if (computerSelection === "paper") {
    console.log("This round was a draw! Try again!");
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function scissors() {
  if (computerSelection === "rock") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    roundCount += 1;
    playerSelects();
  } else if (computerSelection === "paper") {
    console.log("This round was a draw! Try again!");
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}
