const GAME_CHOICE = ["rock", "paper", "scissors"];

const ROCK = document.getElementById("#rock");
const PAPER = document.getElementById("#paper");
const SCISSORS = document.getElementById("#scissors");
const PLAYER_SCORE = document.getElementById("playerScore");
const COMPUTER_SCORE = document.getElementById("cpuScore");
const DRAW_COUNT = document.getElementById("drawScore");
const ROUND_COUNT = document.getElementById("roundScore");
const ROUND_MESSAGE = document.getElementById("roundMessage");

let playerWins = 0;
let computerWins = 0;
let nobodyWins = 0;
let roundCount = 0;

updateElements()

function playGame(playerSelection) {
  var computerSelection = GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
  roundCount += 1;
  if (playerSelection === "rock") {
    rock(playerSelection, computerSelection);
  } else if (playerSelection === "paper") {
    paper(playerSelection, computerSelection);
  } else if (playerSelection === "scissors") {
    scissors(playerSelection, computerSelection);
  } else {
    roundCount -= 1;
  }
}

function rock(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    addNobodyWins();
  } else if (computerSelection === "paper") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addPlayerWins(playerSelection, computerSelection);
  }
  updateElements(playerSelection, computerSelection);
}

function paper(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addNobodyWins();
  } else if (computerSelection === "scissors") {
    addComputerWins(playerSelection, computerSelection);
  }
  updateElements(playerSelection, computerSelection);
}

function scissors(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addNobodyWins();
  }
  updateElements(playerSelection, computerSelection);
}

function addPlayerWins(playerSelection, computerSelection) {
  ROUND_MESSAGE.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  playerWins += 1;
}
function addComputerWins(playerSelection, computerSelection) {
  ROUND_MESSAGE.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  computerWins += 1;
}
function addNobodyWins(playerSelection, computerSelection) {
  ROUND_MESSAGE.textContent = `This round was a draw! Try again!`;
  nobodyWins += 1;
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

function updateElements(playerSelection, computerSelection) {
  let pScore = `Player Score: ${playerWins}`;
  let cScore = `Computer Score: ${computerWins}`;
  let dCount = `Draws: ${nobodyWins}`;
  let rCount = `Round Count: ${roundCount}`;
  PLAYER_SCORE.textContent = pScore
  COMPUTER_SCORE.textContent = cScore;
  DRAW_COUNT.textContent = dCount;
  ROUND_COUNT.textContent = rCount;
  setTimeout(() => {
    roundCounter();
  }, 800)
}

function logForMe() {
  console.log(PLAYER_SCORE, COMPUTER_SCORE, DRAW_COUNT, ROUND_COUNT);
};

function roundCounter() {
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
      "An error has occured: The game has run too many rounds. Restarting");
    newGameYes();
  }
}

function globalReset() {
  playerWins = 0;
  computerWins = 0;
  nobodyWins = 0;
  roundCount = 0;
  updateElements(0, 0, 0, 0);
  ROUND_MESSAGE.textContent = "";
  console.log("score reset");
}
