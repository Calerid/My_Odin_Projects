const gameChoices = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;
let nobodyWins = 0;
let roundCount = 0;
let computerSelection = "";
let playerSelection = "";

startNewRound();

function startNewRound() {
  playerPlay();
  computerPlay();
  playGame(playerSelection, computerSelection);
}

function playerPlay(){
  playerSelection = prompt("Please enter Rock, Paper, or scissors")
  return playerSelection.toLowerCase();
} 

function computerPlay() {
  computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return computerSelection;
}

// playGame takes the player and computer input. passes computerPlay argument to the correct 
//scoring function

function playGame(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    rock(computerSelection);
  } else if (playerSelection === "paper") {
    paper(computerSelection);
  } else if (playerSelection === "scissors") {
    scissors(computerSelection);
  }
}

function addPlayerWins() {
  roundCount += 1;
  playerWins += 1;
}
function addComputerWins() {
  roundCount += 1;
  computerWins += 1;
}
function addNobodyWins() {
  roundCount += 1;
  nobodyWins += 1;
}

function rock(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`This round was a draw! Try again!`);
    addNobodyWins();
  } else if (computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    addPlayerWins();
  } else if (computerSelection === "scissors") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    addComputerWins();
  }
  return roundCounter(roundCount);
}

function paper(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    addComputerWins();
  } else if (computerSelection === "paper") {
    console.log(`This round was a draw! Try again!`);
    addNobodyWins();
  } else if (computerSelection === "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    addPlayerWins();
  }
  return roundCounter(roundCount);
}

function scissors(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    addComputerWins();
  } else if (computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    addPlayerWins();
  } else if (computerSelection === "scissors") {
    console.log(`This round was a draw! Try again!`);
    addNobodyWins();
  }
  return roundCounter(roundCount);
}

function roundCounter(roundCount) {
  if (roundCount < 5) {
    if (playerWins === 3) {
      console.log("You are the winner!");
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase();
      if (yN == "yes") {
        globalReset();
        startNewRound();
      } else if (yN === "no") {
        console.log("Boo");
        globalReset();
      }
    } else if (computerWins === 3) {
      console.log("You lose!");
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase();
      if (yN == "yes") {
        globalReset();
        startNewRound();
      } else if (yN === "no") {
        console.log("Boo");
        globalReset();
      }
    } else if (nobodyWins === 3) {
      console.log("Nobody won this match :( ");
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase();
      if (yN == "yes") {
        globalReset();
        startNewRound();
      } else if (yN === "no") {
        console.log("Boo");
        globalReset();
      }
    } else {
      startNewRound();
    }
  } else if (roundCount === 5) {
    console.log("Nobody won this match :( ");
    let yN = prompt("Would you like to play again? Yes or No?").toLowerCase();
    if (yN == "yes") {
      globalReset();
      startNewRound();
    } else if (yN === "no") {
      console.log("Boo");
      globalReset();
    }
  }
}

function globalReset() {
  playerWins = 0;
  computerWins = 0;
  nobodyWins = 0;
  roundCount = 0;
  console.log("score reset");
}
