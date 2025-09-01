const TARGET_NUMBER = Math.floor(Math.random() * 20) + 1;
const MAX_ATTEMPTS = 5;

let attempts = 0;
let gameWon = false;

console.log("🎯 Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 20.");
console.log("You have " + MAX_ATTEMPTS + " attempts to guess it!");
console.log("----------------------------------------");


function checkGuess(guess, target) {
  if (guess === target) {
    return "correct";
  } else if (guess > target) {
    return "too_high";
  } else {
    return "too_low";
  }
}


while (attempts < MAX_ATTEMPTS && gameWon === false) {
  attempts = attempts + 1;


  let userGuess = prompt("Attempt " + attempts + ": Enter a number between 1 and 20");
  userGuess = Number(userGuess);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
    console.log("⚠️ Invalid input! Please enter a number between 1 and 20.");
    attempts = attempts - 1;
    continue;
  }

  let result = checkGuess(userGuess, TARGET_NUMBER);

  if (result === "correct") {
    console.log("🎉 Correct! The number was " + TARGET_NUMBER + ". You won in " + attempts + " attempts!");
    gameWon = true;
  } else if (result === "too_high") {
    console.log("📉 Too high! Attempts left: " + (MAX_ATTEMPTS - attempts));
  } else {
    console.log("📈 Too low! Attempts left: " + (MAX_ATTEMPTS - attempts));
  }
}

if (!gameWon) {
  console.log("💔 Game Over! The correct number was " + TARGET_NUMBER);
}

console.log("----------------------------------------");
console.log("🔄 Refresh the page to play again!");
