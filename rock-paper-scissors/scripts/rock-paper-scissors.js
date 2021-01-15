const GAME_CHOICE = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = "";

let playerWins = 0;
let computerWins = 0;
let nobodyWins = 0;
let roundCount = 0;

//initiates the new round by calling startNewRound. startNewRound calls for
// the player and computer functions to make a selection.


function startNewRound() {
  roundCount += 1;
  playerPlay();
  computerPlay();
  playGame(playerSelection, computerSelection);
}

function playerPlay() {
  playerSelection = prompt("Please enter Rock, Paper, or scissors").toLowerCase();
  return playerSelection;
}

function computerPlay() {
  computerSelection = GAME_CHOICE[Math.floor(Math.random() * GAME_CHOICE.length)];
  return computerSelection;
}
// playGame takes the player and computer input. passes computerPlay argument to the correct
//scoring function.

function playGame(playerSelection, computerSelection, roundCount) {
  if (playerSelection === "rock") {
    rock(computerSelection);
  } else if (playerSelection === "paper") {
    paper(computerSelection);
  } else if (playerSelection === "scissors") {
    scissors(computerSelection);
  }
}

// "add" functions tally the score. called by functions rock(), paper(), scissors().
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

//rock() paper() and scissors () take computerSelection as argument.
// these decides the outcome of the round amd call the add functions.
function rock(computerSelection) {
  if (computerSelection === "rock") {
    addNobodyWins();
  } else if (computerSelection === "paper") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addComputerWins(playerSelection, computerSelection);
  }
  return roundCounter(roundCount, playerWins, computerWins);
}

function paper(computerSelection) {
  if (computerSelection === "rock") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addNobodyWins();
  } else if (computerSelection === "scissors") {
    addPlayerWins(playerSelection, computerSelection);
  }
  return roundCounter(roundCount, playerWins, computerWins);
}

function scissors(computerSelection) {
  if (computerSelection === "rock") {
    addComputerWins(playerSelection, computerSelection);
  } else if (computerSelection === "paper") {
    addPlayerWins(playerSelection, computerSelection);
  } else if (computerSelection === "scissors") {
    addNobodyWins();
  }
  return roundCounter(roundCount, playerWins, computerWins);
}

// roundCounter checks to see if the match score equals a win or loss.
function newGamePrompt() {
  let playAgain = prompt("Would you like to play again? Yes or No?").toLowerCase();
  return playAgain;
}

function newGameNo() {
  console.log("Thank you for playing!");
  globalReset();
}

function newGameYes() {
  globalReset();
  startNewRound();
}

function roundCounter(roundCount, playerWins, computerWins) {
  console.log(`Your wins: ${playerWins} \nComputer Wins: ${computerWins} \nDraws: ${nobodyWins}`);
  if (roundCount <= 5) {
    if (playerWins === 3) {
      console.log("You are the winner!");
      playAgain = newGamePrompt();
      if (playAgain === "yes") {
        newGameYes()
      } else if (playAgain === "no") {
        newGameNo()
      }
    } else if (computerWins === 3) {
        console.log("You lose!");
        playAgain = newGamePrompt()
        if (playAgain === "yes") {
        newGameYes()
      } else if (playAgain === "no") {
        newGameNo()
      }
    } else if (nobodyWins === 3) {
        console.log("Nobody won!");
        playAgain = newGamePrompt()
        if (playAgain === "yes") {
        newGameYes()
        } else if (playAgain === "no") {
        newGameNo()
      }
    } else {
      startNewRound();
    }
  } else if (roundCount === 5) {
    console.log("Nobody won this match :( ");
    playAgain = newGamePrompt()
    if (playAgain === "yes") {
      newGameYes()
    } else if (playAgain === "no") {
      newGameNo()

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