let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreBoard = document.getElementById("score");
let score = 0;
let resultMessage = document.getElementById("resultMessage");
let playAgain = document.getElementById("playAgain");

let computerPick;

let playerPicker = document.getElementById("rock-paper-scissors");
let resultDiv = document.getElementById("result-div");

let displayPlayerPick = document.getElementById("player-pick").classList;
let displayComputerPick = document.getElementById("computer-pick").classList;

function randomPick() {
  computerPick = Math.floor(Math.random() * 3);
  return computerPick;
}

function win() {
  score = score + 1;
  scoreBoard.textContent = score;
  resultMessage.textContent = "YOU WIN";
}

function loose() {
  score = score - 1;
  scoreBoard.textContent = score;
  resultMessage.textContent = "YOU LOOSE";
}

function tie() {
  resultMessage.textContent = "TIE";
}

function reset() {
  displayPlayerPick.remove("rockPick", "scissorsPick", "paperPick");
  displayComputerPick.remove("rockPick", "scissorsPick", "paperPick");
}

//0=rock
//1=paper
//2=scissors

rock.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("rockPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    tie();
    console.log("tie");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    loose();
    console.log("U loose");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    win();
    console.log("U win");
  }
});

paper.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("paperPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    win();
    console.log("U win");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    tie();
    console.log("tie");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    loose();
    console.log("U loose");
  }
});

scissors.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("scissorsPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    loose();
    console.log("U loose");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    win();
    console.log("U win");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    tie();
    console.log("Tie");
  }
});

playAgain.addEventListener("click", () => {
  playerPicker.style.display = "flex";
  resultDiv.style.display = "none";
});
