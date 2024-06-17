// TODO 3 - current score tracker (You/Computer: 0/0)

const rpsButtonsHtml = `<div>
  <button class="userChoice choice-rock">🪨</button>
  <button class="userChoice choice-paper">📰</button>
  <button class="userChoice choice-scissors">✂️</button>
</div>`;
const playButtonsHtml = `<div>
<button class="play-btn">Start</button>
</div>`;

// put the html inside the .container element
const containerElement = document.querySelector(".container");
// containerElement.innerHTML = rpsButtonsHtml;
containerElement.innerHTML = playButtonsHtml;

// handle clicks:
// 1. handle starting the game
// call playGame fn
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playGame);

// TODO modify playGame fn to...
// 1. show the rpsButtons
// 2. add click handlers to the rps buttons
// 3. when you click, update the score & round (Human: 0, Computer: 0, Round: 1)
// 4. if round === 5, then show some winner ui "Human Wins!" & Play Again button

// 2. handle user choice

function getComputerChoice() {
  // let getcomputerchoice randomly return rock, paper or scissors
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    console.log("Computer chose rock");
    return "rock";
  } else if (computerChoice === 1) {
    console.log("Computer chose paper");
    return "paper";
  } else if (computerChoice === 2) {
    console.log("Computer chose scissors");
    return "scissors";
  }
}

//* Ask daniel about null error when cancelling, , as well as timing out prompt

const VALID_CHOICES = ["rock", "paper", "scissors"];

function exitTheGame() {
  console.log("exited");
  return null;
}

function getHumanChoice() {
  // let getHumanChoice return a valid choice depending on user input
  // let HumanChoice = prompt("Enter your choice: rock, paper or scissors");
  let HumanChoice = null;
  if (!HumanChoice) {
    // the user has hit cancel -> exit the game
    return null;
  }
  HumanChoice = HumanChoice?.toLowerCase();
  if (HumanChoice === "rock") {
    console.log("You entered rock");
    return "rock";
  } else if (HumanChoice === "paper") {
    console.log("You entered paper");
    return "paper";
  } else if (HumanChoice === "scissors") {
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

// whenever we change some data (e.g. humanScore), update the UI to match the new values
function updateUI() {
  // TODO
}

// Create a function that takes human and computer player choices as arguments,
// plays a single round, increments the round winner's score and
// logs a winner announcement

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    // alert("It's a tie");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win this round");
      // alert("You win this round");
      humanScore++;
    } else {
      console.log("You lose this round");
      // alert("You lose this round");
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win this round");
      // alert("You win this round");
      humanScore++;
    } else {
      console.log("You lose this round");
      // alert("You lose this round");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win this round");
      // alert("You win this round");
      humanScore++;
    } else {
      console.log("You lose this round");
      // alert("You lose this round");
      computerScore++;
    }
  }
}

// hi

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
    // alert("You win this game");
  } else if (computerScore > humanScore) {
    console.log("You lose this game");
    // alert("You lose this game");
  } else {
    console.log("It's a tie! Play this game again");
    // alert("It's a tie! Play this game again");
  }
}

// Play 5 rounds by calling playRound 5 times.
// const result = playGame();

// Timeout the prompt for 3 seconds so player knows who won current round
