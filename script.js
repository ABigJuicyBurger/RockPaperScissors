const rpsButtonsHtml = `<div id = rps-buttons>
  <button class="userChoice choice-rock">🪨</button>
  <button class="userChoice choice-paper">📰</button>
  <button class="userChoice choice-scissors">✂️</button>
</div>`;

const playButtonsHtml = `<div>
<button class="play-btn">Start</button>
</div>`;

//Play again button
const playAgainHtml = `<div>
<button class="play-again-btn">Play Again</button>
</div>`;
const playAgainDiv = document.createElement("div");

//play again div

// Win or lose div
const winOrLoseHtml = `<div>
<h1 class="win-or-lose"></h1>
</div>`;
const winOrLoseDiv = document.createElement("div");

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
    if (currentRound == 1) {
      scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
      choicesElement.textContent = `Choose rock, paper, or scissors`;
    } else if ((currentRound) => 1) {
      scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
      choicesElement.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
    } else {
      // POTENTIAL BUG
      scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}, Round: ${currentRound}`;
    }
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
    winOrLoseDiv.innerHTML = "It's a tie!";
    containerElement.appendChild(winOrLoseDiv);
    console.log("It's a tie");
  } else {
    const winningMoves = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winningMoves[humanChoice] === computerChoice) {
      // use win or lose div from above
      winOrLoseDiv.innerHTML = "You win this round!";
      containerElement.appendChild(winOrLoseDiv);
      console.log("You win this round!");
      humanScore++;
    } else {
      winOrLoseDiv.innerHTML = "You lose this round!";
      containerElement.appendChild(winOrLoseDiv);
      console.log("You lose this round!");
      computerScore++;
    }
  }
  if (currentRound <= maxRounds) {
    currentRound++;
  } else if (currentRound > maxRounds) {
    gameEnded = true;
    playAgainButton();
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

// Testing changes for new repository

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
  // Clear the container element
  containerElement.innerHTML = "";

  // Create the "Play Again" button HTML
  let playAgainHTML;

  if (humanScore > computerScore) {
    playAgainHTML = `<div class="win">You win! <button class="play-again-btn">Play Again</button></div>`;
  } else {
    playAgainHTML = `<div class="lose">Computer wins! <button class="play-again-btn">Play Again</button></div>`;
  }

  containerElement.innerHTML = playAgainHTML;

  // Get the "Play Again" button element
  const playAgainBtn = containerElement.querySelector(".play-again-btn");

  // Add click event listener to the "Play Again" button
  playAgainBtn.addEventListener("click", () => {
    // Reset scores and round
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    gameEnded = false;

    // Clear the scoreboard and choices elements
    scoreElement.textContent = "";
    choicesElement.textContent = "";

    // Clear the console
    console.clear();

    // Start a new game
    playGame();
  });

  // Apply styles to the "Play Again" button
  // Add a class to the "Play Again" button
  playAgainBtn.classList.add("play-again-btn");

  // Get the win and lose div element and provide CSS
  const win = document.querySelector(".win");
  const lose = document.querySelector(".lose");

  // Add a class to the win and lose div elements
  win.classList.add("win");
  lose.classList.add("lose");
}

// Timeout the prompt for 3 seconds so player knows who won current round
