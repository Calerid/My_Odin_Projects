let playerWins = 0;
let computerWins = 0;
let roundCount = 0;
let playerSelection = prompt(
  "Please enter Rock, Paper, or scissors"
).toLowerCase();

function startNewRound(){
    playerSelection = prompt("Please enter Rock, Paper, or scissors");
    computerPlay();

}

function computerPlay() {
  let rPSS = ["rock", "paper", "scissors"];
  let computerSelection = rPSS[Math.floor(Math.random() * rPSS.length)];
  return computerSelection;
}

function roundCounter(roundCount) {}

function rock(computerSelection) {
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

function paper(computerSelection) {
  if (computerSelection === "rock") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    roundCount += 1;
    playerSelects();
  } else if (computerSelection === "paper") {
    console.log("This round was a draw! Try again!");
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log("You lose! ${computerSelection} beats ${playerSelection}");
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function scissors(computerSelection) {
  if (computerSelection === "rock") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    roundCount += 1;
    playerSelects();
  } else if (computerSelection === "paper") {
    console.log("You lose! ${computerSelection} beats ${playerSelection}");
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log("You win! ${playerSelection} beats ${computerSelection}");
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

// Counts and returns the round value

function roundCOunter(roundCount) {
  if (roundCount < 5){
    if (playerWins === 3){
      console.log("You are the winner!")
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase;
      if (yN == "yes"){
        playerWins = 0;
        computerWins = 0;
        roundRount = 0;
      }
    }
    if (computerWins === 3){
      console.log("You lose! Big fat LOSER!");
      console.log("Of course the computer is probably cheating.")
      console.log("It's not though. You just suck!")
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase;
      if (yN == "yes"){
        playerWins = 0;
        computerWins = 0;
        roundCount = 0;
      }
    }
  }
}
