// TODO 3 - current score tracker (You/Computer: 0/0)

// Apply CSS styles to the rock paper scissors game but not the whole doc
const body = document.querySelector("body");
body.setAttribute("style", "border: 5px solid red; padding: 15%;");

const rpsButtonsHtml = `<div id = rps-buttons>
  <button class="userChoice choice-rock">🪨</button>
  <button class="userChoice choice-paper">📰</button>
  <button class="userChoice choice-scissors">✂️</button>
</div>`;
const rpsButtons = document.getElementById("rps-buttons");

const playButtonsHtml = `<div>
<button class="play-btn">Start</button>
</div>`;

//Play again button
const playAgainHtml = `<div>
<button class="play-again-btn">Play Again</button>
</div>`;
const playAgainDiv = document.createElement("div");

//play again div

// Add a title
const Title = document.querySelector(".title");
Title.textContent = "Rock, Paper, Scissors";

// put the html inside the .container element
const containerElement = document.querySelector(".container");

containerElement.innerHTML = playButtonsHtml;

// handle clicks:
// 1. handle starting the game
// call playGame fn
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playGame);

// TODO modify playGame fn to...
// 2. add click handlers to the rps buttons
// 3. when you click, update the score & round (Human: 0, Computer: 0, Round: 1)
// 4. if round === 5, then show some winner ui "Human Wins!" & Play Again button

const buttons = document.querySelectorAll(".userChoice");

// Prevent scoreboard from duplicating
// Create scoreElement once
const scoreElement = document.createElement("div");
document.body.appendChild(scoreElement);
const choicesElement = document.createElement("div");
document.body.appendChild(choicesElement);

// 3. when you click, update the score & round (Human: 0, Computer: 0, Round: 1)
function updateUI(humanChoice, computerChoice) {
  if (!gameEnded) {
    scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
    choicesElement.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
  } else {
    // POTENTIAL BUG
    scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
  }
}

const maxRounds = 4;
let gameEnded = false;

function playGame() {
  // Reset scores and round

  humanScore = 0;
  computerScore = 0;
  currentRound = 1;

  // Clear the container element
  containerElement.innerHTML = "";

  // Show emoji buttons

  containerElement.innerHTML = rpsButtonsHtml;

  // Update UI with initial scores and round
  updateUI();

  // Call getHumanChoice to handle button clicks
  getHumanChoice(buttons);
}

function playRound(humanChoice, computerChoice) {
  // using object mapping to simplify code
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else {
    const winningMoves = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winningMoves[humanChoice] === computerChoice) {
      console.log("You win this round!");
      humanScore++;
    } else {
      console.log("You lose this round!");
      computerScore++;
    }
  }
  if (currentRound <= maxRounds) {
    currentRound++;
  } else if (currentRound > maxRounds) {
    // TODO 4 - show winner UI
    gameEnded = true;
    if (humanScore > computerScore) {
      containerElement.innerHTML = "You win! Play again?";
      playAgainButton();
    } else {
      containerElement.innerHTML = "Computer wins! Play again?";
      playAgainButton();
    }
    // TODO 6 - add Play Again button click handler
  }
  // whenever we change some data (e.g. humanScore), update the UI to match the new values
  updateUI(humanChoice, computerChoice); // Call updateUI and pass the 2 parameters
}

function getComputerChoice() {
  // Simplify code from array to regular code
  const randomIndex = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[randomIndex];
  console.log(`Computer chose ${computerChoice}`);

  return computerChoice;
}

function getHumanChoice() {
  // let getHumanChoice return a valid choice depending on user input
  // show the buttons
  const buttons = document.querySelectorAll(".userChoice");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanSelection = button.classList[1].split("-")[1];
      console.log(`You entered ${humanSelection}`);
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      return humanSelection;
    });
  });
}

function playAgainButton() {
  playAgainDiv.innerHTML = playAgainHtml;
  containerElement.appendChild(playAgainDiv);
  const playAgainBtn = playAgainDiv.querySelector(".play-again-btn");
  playAgainBtn.addEventListener("click", playGame);
  playAgainBtn.setAttribute("style", "border: 1px solid black; width: 100%;");
}

// Timeout the prompt for 3 seconds so player knows who won current round
