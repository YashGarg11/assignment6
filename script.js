let computerGuesses = 5; // number of guesses the computer has
let computerNumber; // the number the computer is trying to guess
let userNumber; // the number entered by the user
let result = document.getElementById("result"); // the element to display the game result

// function to start the game
function startGame() {
    userNumber = parseInt(document.getElementById("user-input").value);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        result.innerHTML = "Invalid number! Please enter a number between 1 and 100.";
    } else {
        result.innerHTML = "";
        computerNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
        computerGuess();
    }
}

// function to make a computer guess
function computerGuess() {
    if (computerGuesses === 0) {
        result.innerHTML = `Sorry, the computer was unable to guess your number ${userNumber}. You win!`;
    } else if (computerNumber === userNumber) {
        result.innerHTML = `The computer guessed your number ${userNumber}! The computer wins!`;
    } else {
      let guess = Math.floor(Math.random() * 100) + 1; // generate a random guess
      computerGuesses--;
      if (guess === userNumber) {
          result.innerHTML = `The computer guessed your number ${userNumber}! The computer wins!`;
      } else {
          result.innerHTML = `The computer guessed ${guess}.`;
          setTimeout(computerGuess, 1000); // delay the next guess by 1 second
      }
  }
}
