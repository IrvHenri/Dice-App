let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const container = document.getElementsByClassName("container");

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const dblBtn = document.getElementById("dblOrNothing");

/////// Reset Function///
function showResetButton() {
  dblBtn.style.display = "none";
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function winnerMsg() {
  player1Scoreboard.classList.add("winning-emoji");
  player1Scoreboard.textContent = "🎉";
  player2Scoreboard.classList.add("winning-emoji");
  player2Scoreboard.textContent = "🎉";
  player1Dice.classList.add("winning-emoji");
  player1Dice.textContent = "🎉";
  player2Dice.classList.add("winning-emoji");
  player2Dice.textContent = "🎉";
}
//////////----------Roll Button----------////////
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Dice.textContent = randomNumber;
    player1Scoreboard.textContent = player1Score;

    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += randomNumber;
    player2Dice.textContent = randomNumber;
    player2Scoreboard.textContent = player2Score;

    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Won 🥳";
    winnerMsg();
    showResetButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won 🥳";
    winnerMsg();
    showResetButton();
  }

  player1Turn = !player1Turn;
});

//////////----------Reset Button----------////////

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  dblBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player1Scoreboard.classList.remove("winning-emoji");
  player2Scoreboard.classList.remove("winning-emoji");
  player1Dice.classList.remove("winning-emoji");
  player2Dice.classList.remove("winning-emoji");
}
//////----------Double or Nothing Button

dblBtn.addEventListener("click", function () {
  const dblNumber = (Math.floor(Math.random() * 6) + 1) * 2;
  if (player1Turn) {
    player1Score += dblNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = dblNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += dblNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = dblNumber;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score > 20) {
    message.textContent = "Player 1 Lost";
    showResetButton();
  } else if (player1Score === 20) {
    message.textContent = "Player 1 Won";
    showResetButton();
  } else if (player2Score > 20) {
    message.textContent = "Player 2 Lost";
    showResetButton();
  } else if (player2Score === 20) {
    message.textContent = "Player 2 Won";
    showResetButton();
  }

  player1Turn = !player1Turn;
});



//////Change order of operations.When the turn changes. update previous players score board.