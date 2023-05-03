const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

let numAttempts = 0;
let guess = Math.floor(Math.random() * 100) + 1;

function checkInput() {
  if (userInput.value < 1 || userInput.value > 100) {
    result.innerHTML = "Invalid input. Please enter a number between 1 and 100.";
    return false;
  }
  return true;
}

function resetGame() {
  numAttempts = 0;
  guess = Math.floor(Math.random() * 100) + 1;
}

function playGame() {
  if (checkInput()) {
    numAttempts++;

    if (numAttempts > 5) {
      result.innerHTML = `Sorry, the computer was unable to guess your number. You win!`;
      resetGame();
      return;
    }

    if (userInput.value == guess) {
      result.innerHTML = `The computer guessed your number (${guess}) in ${numAttempts} attempts. The computer wins!`;
      resetGame();
      return;
    }

    if (userInput.value < guess) {
      result.innerHTML = `The computer guessed ${userInput.value}. The number is higher.`;
    } else {
      result.innerHTML = `The computer guessed ${userInput.value}. The number is lower.`;
    }

    userInput.value = "";
  }
}

submitBtn.addEventListener("click", playGame);