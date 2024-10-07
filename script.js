"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", startGame);

function startGame() {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage("⛔ No number!");
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 sorry You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}

document.querySelector(".again").addEventListener("click", playAgain);

function playAgain() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("🤔 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}
