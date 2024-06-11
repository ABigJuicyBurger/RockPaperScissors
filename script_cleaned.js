const CHOICES = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

function getComputerChoice() {
  // let getcomputerchoice randomly return rock, paper or scissors
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    console.log("Computer chose rock");
    return CHOICES.rock;
  } else if (computerChoice === 1) {
    console.log("Computer chose paper");
    return "paper";
  } else if (computerChoice === 2) {
    console.log("Computer chose scissors");
    return "scissors";
  }
}

//* Ask daniel about null error when cancelling, , as well as timing out prompt

function exitTheGame() {
  console.log("exited");
  return null;
}

// class Human {
//   constructor(humanChoice) {
//     this.humanChoice = humanChoice;
//   }
//   shout(){
//     console.log(this.humanChoice);
//   }
// }

// const bob = new Human("rock")
// bob.shout()

function getHumanChoice() {
  // let getHumanChoice return a valid choice depending on user input
  let humanChoice = prompt("Enter your choice: rock, paper or scissors");
  if (!humanChoice) {
    // the user has hit cancel -> exit the game
    return null;
  }
  // humanChoice = humanChoice?.toLowerCase();
  if (humanChoice === "rock") {
    console.log("You entered rock");
    return "rock";
  } else if (humanChoice === "paper") {
    console.log("You entered paper");
    return "paper";
  } else if (humanChoice === "scissors") {
    console.log("You entered scissors");
    return "scissors";
  } else {
    return getHumanChoice();
  }
}

// Create two new variables named humanScore and computerScore and
// initialize those variables with the value of 0

let humanScore = 0;
let computerScore = 0;

// Create a function that takes human and computer player choices as arguments,
// plays a single round, increments the round winner's score and
// logs a winner announcement

const MAP_WIN_CONDITIONS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    alert("It's a tie");
  } else {
    handleChoice(computerChoice, MAP_WIN_CONDITIONS[humanChoice]);
  }
  // } else if (humanChoice === "rock") {
  //   handleChoice(computerChoice, "scissors");
  // } else if (humanChoice === "paper") {
  //   handleChoice(computerChoice, "rock");
  // } else if (humanChoice === "scissors") {
  //   handleChoice(computerChoice, "paper");
  // }
}

function handleChoice(computerChoice, winningMove) {
  if (computerChoice === winningMove) {
    console.log("You win this round");
    alert("You win this round");
    humanScore++;
  } else {
    console.log("You lose this round");
    alert("You lose this round");
    computerScore++;
  }
}

const humanBob = {
  name: "Bob",
  weight: 99999999999,
  height: 0,
};

const listOfEmployees = [
  {
    name: "Bob",
    weight: 99999999999,
    height: 0,
  },
];

// write a function named playGame that calls playRound
// to play 5 rounds, keeps track of the scores and declares
// a winner at the end

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function

function playGame() {
  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const humanHitCancel = humanSelection === null;
    if (humanHitCancel) {
      // the player hit cancel
      return exitTheGame();
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Final score:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win this game");
    alert("You win this game");
  } else if (computerScore > humanScore) {
    console.log("You lose this game");
    alert("You lose this game");
  } else {
    console.log("It's a tie! Play this game again");
    alert("It's a tie! Play this game again");
  }
}

// Play 5 rounds by calling playRound 5 times.
const result = playGame();

// Timeout the prompt for 3 seconds so player knows who won current round
