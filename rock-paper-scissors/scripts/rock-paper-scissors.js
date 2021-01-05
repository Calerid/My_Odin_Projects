let playerWins = 0;
let computerWins = 0;
let roundCount = 0;
let playerSelection = prompt("Please enter Rock, Paper, or scissors").toLowerCase();
let computerSelection = "";

function computerPlay() {
  let rPSS = ["rock", "paper", "scissors"];
  computerSelection = rPSS[Math.floor(Math.random() * rPSS.length)];
  return computerSelection;
}

//Calls the computer play function

computerPlay();

// Win lose messages

let draw =  `This round was a draw! Try again!`;
let lose =  `You Lose! ${computerSelection} beats ${playerSelection}!`;
let winner =  `You win! ${playerSelection} beats ${computerSelection}`;

var winLossMessages = [
  draw, 
  lose,
  winner,
];

playGame(playerSelection, computerPlay());

function startNewRound() {
  playerSelection = prompt("Please enter Rock, Paper, or scissors");
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

function rock(computerSelection, winLossMessages) {
  if (computerSelection === "rock") {
    console.log(winLossMessages[0]);
    roundCount += 1;
  } else if (computerSelection === "paper") {
    console.log(winLossMessages[2]);
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log(winLossMessages[1]);
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function paper(computerSelection, winLossMessages) {
  if (computerSelection === "rock") {
    console.log(winLossMessages[1]);
    roundCount += 1;
  } else if (computerSelection === "paper") {
    console.log(winLossMessages[0]);
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log(winLossMessages[2]);
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function scissors(computerSelection, winLossMessages) {
  if (computerSelection === "rock") {
    console.log(winLossMessages[1]);
    roundCount += 1;
  } else if (computerSelection === "paper") {
    console.log(winLossMessages[2]);
    computerWins += 1;
    roundCount += 1;
  } else if (computerSelection === "scissors") {
    console.log(winLossMessages[0]);
    playerWins += 1;
    roundCount += 1;
  }
  return roundCounter(roundCount);
}

function roundCounter(roundCount) {
  if (roundCount < 5) {
    if (playerWins === 3) {
      console.log("You are the winner!");
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase;
      if (yN == "yes") {
        playerWins = 0;
        computerWins = 0;
        roundRount = 0;
      } else if (yN === "no") {
        console.log("Boo");
      }
    }
    if (computerWins === 3) {
      console.log("You lose!");
      let yN = prompt("Would you like to play again? Yes or No?").toLowerCase;
      if (yN == "yes") {
        playerWins = 0;
        computerWins = 0;
        roundCount = 0;
      } else if (yN === "no") {
        console.log("Boo");
      }
    } else {
      startNewRound();
    }
  }
}
