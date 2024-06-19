// TODO 3 - current score tracker (You/Computer: 0/0)

// Apply CSS styles to the rock paper scissors game but not the whole doc
const body = document.querySelector("body");
body.setAttribute("style", "border: 1px solid red; padding: 10px;");

const rpsButtonsHtml = `<div>
  <button class="userChoice choice-rock">🪨</button>
  <button class="userChoice choice-paper">📰</button>
  <button class="userChoice choice-scissors">✂️</button>
</div>`;
const playButtonsHtml = `<div>
<button class="play-btn">Start</button>
</div>`;

// Add a title
const Title = document.querySelector(".title");
Title.textContent = "Rock, Paper, Scissors";

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
  scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
  choicesElement.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
}

const maxRounds = 5;

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

// Timeout the prompt for 3 seconds so player knows who won current round
