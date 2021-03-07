const GAME_CHOICE = ["rock", "paper", "scissors"];

const ROCK = document.getElementById("#rock");
const PAPER = document.getElementById("#paper");
const SCISSORS = document.getElementById("#scissors");
const PSCORE = document.getElementById("playerScore");
const CSCORE = document.getElementById("cpuScore");
const DCOUNT = document.getElementById("drawScore");
const RCOUNT = document.getElementById("roundScore");

let playerSelection = "";
let computerSelection = "";

let playerWins = 0;
let computerWins = 0;
let nobodyWins = 0;
let roundCount = 0;

function setRock() {
  playerSelection = "rock";
  computerPlay();
  startNewRound(playerSelection);
}
function setPaper() {
  playerSelection = "paper";
  computerPlay();
  startNewRound(playerSelection);
}
function setScissors() {
  playerSelection = "scissors";
  computerPlay();
  startNewRound(playerSelection);
}

function startNewRound() {
  roundCount += 1;
  playGame(playerSelection, computerSelection);
}

function playerPlay() {
  playerSelection = prompt(
    "Please enter Rock, Paper, or scissors"
  ).toLowerCase();
  return playerSelection;
}

function computerPlay() {
  computerSelection =
    GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
  return computerSelection;
}

function playGame(playerSelection, computerSelection, roundCount) {
  if (playerSelection === "rock") {
    rock(computerSelection);
  } else if (playerSelection === "paper") {
    paper(computerSelection);
  } else if (playerSelection === "scissors") {
    scissors(computerSelection);
  } else if (playerSelection === "restart") {
    newGameYes();
  } else {
    roundCount -= 1;
  }
}

function addPlayerWins(playerSelection, computerSelection) {
  console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  playerWins += 1;
}
function addComputerWins(playerSelection, computerSelection) {
  console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
  computerWins += 1;
}
function addNobodyWins() {
  console.log(`This round was a draw! Try again!`);
  nobodyWins += 1;
}

function rock(computerSelection) {
  if (computerSelection === "rock") {
    addNobodyWins();
  } else if (computerSelection === "paper") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addPlayerWins(playerSelection, computerSelection);
  }
  updateElements(playerWins, computerWins, roundCount, nobodyWins);
  return roundCounter(roundCount, playerWins, computerWins, nobodyWins);
}

function paper(computerSelection) {
  if (computerSelection === "rock") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addNobodyWins();
  } else if (computerSelection === "scissors") {
    addComputerWins(playerSelection, computerSelection);
  }
  updateElements(playerWins, computerWins, roundCount, nobodyWins);
  return roundCounter(roundCount, playerWins, computerWins, nobodyWins);
}

function scissors(computerSelection) {
  if (computerSelection === "rock") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addNobodyWins();
  }
  updateElements(playerWins, computerWins, roundCount, nobodyWins);
  return roundCounter(roundCount, playerWins, computerWins, nobodyWins);
}

// roundCounter checks to see if the match score equals a win or loss.
function newGamePrompt() {
  let playAgain = prompt(
    "Would you like to play again? Yes or No?"
  ).toLowerCase();
  if (playAgain === "yes") {
    newGameYes();
  } else if (playAgain === "no") {
    newGameNo();
  }
}

function newGameNo() {
  console.log("Thank you for playing!");
  globalReset();
}

function newGameYes() {
  globalReset();
}

function updateElements(playerWins, computerWins, roundCount, nobodyWins) {
  PSCORE.textContent = `${playerWins}`;
  CSCORE.textContent = `${computerWins}`;
  DCOUNT.textContent = `${nobodyWins}`;
  RCOUNT.textContent = `${roundCount}`;
}

function roundCounter(roundCount, playerWins, computerWins, nobodyWins) {
  console.log(`Your wins: ${playerWins} \nComputer Wins: ${computerWins} \nDraws: ${nobodyWins} \nRound Count: ${roundCount}`);
  if (roundCount === 5 && computerWins < 3 && playerWins < 3 && nobodyWins < 3 ) {
    console.log("This game was a draw");
    newGamePrompt();
  } else if (roundCount <= 5) {
    if (playerWins === 3) {
      console.log("You are the winner!");
      newGamePrompt();
    } else if (computerWins === 3) {
      console.log("You lose!");
      newGamePrompt();
    } else if (nobodyWins === 3) {
      console.log("Nobody won!");
      newGamePrompt();
    }
  } else if (roundCount > 5) {
    console.log(
      "An error has occured: The game has run too many rounds. Restarting"
    );
    newGameYes();
  }
}

function globalReset() {
  playerWins = 0;
  computerWins = 0;
  nobodyWins = 0;
  roundCount = 0;
  updateElements(0, 0, 0, 0);
  console.log("score reset");
}
