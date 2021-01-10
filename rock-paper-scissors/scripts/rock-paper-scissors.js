const gameChoices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;
let nobodyWins = 0;
let roundCount = 0;
let playerSelection = prompt(
  "Please enter Rock, Paper, or scissors"
).toLowerCase();
let computerSelection = "";

function computerPlay() {
  computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return computerSelection;
}

//Calls the computer play function

computerPlay();
playGame(playerSelection, computerPlay());

// Win lose messages

let draw = `This round was a draw! Try again!`;
let lose = `You Lose! ${computerSelection} beats ${playerSelection}!`;
let winner = `You win! ${playerSelection} beats ${computerSelection}`;

function startNewRound() {
  playerSelection = prompt(
    "Please enter Rock, Paper, or scissors"
  ).toLowerCase();
  computerPlay();
  playGame(playerSelection, computerSelection);
}

function playGame(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    rock(computerSelection);
  } else if (playerSelection === "paper") {
    paper(computerSelection);
  } else if (playerSelection === "scissors") {
    scissors(computerSelection);
  }
}

function rock(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`This round was a draw! Try again!`);
    roundCount += 1;
    nobodyWins += 1;
  } else if (computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    roundCount += 1;
    playerWins += 1;
  } else if (computerSelection === "scissors") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    roundCount += 1;
    computerWins += 1;
  }
  return roundCounter(roundCount);
}

function paper(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    roundCount += 1;
    computerWins += 1;
  } else if (computerSelection === "paper") {
    console.log(`This round was a draw! Try again!`);
    roundCount += 1;
    nobodyWins += 1;
  } else if (computerSelection === "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    roundCount += 1;
    playerWins += 1;
  }
  return roundCounter(roundCount);
}

function scissors(computerSelection) {
  if (computerSelection === "rock") {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    roundCount += 1;
    computerWins += 1;
  } else if (computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    roundCount += 1;
    playerWins += 1;
  } else if (computerSelection === "scissors") {
    console.log(`This round was a draw! Try again!`);
    roundCount += 1;
    nobodyWins += 1;
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
  return console.log("score reset");
}
