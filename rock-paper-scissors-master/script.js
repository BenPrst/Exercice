let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let computerPick;

let playerPicker = document.getElementById("rock-paper-scissors");
let resultDiv = document.getElementById("result-div");

let displayPlayerPick = document.getElementById("player-pick").classList;
let displayComputerPick = document.getElementById("computer-pick").classList;

function randomPick() {
  computerPick = Math.floor(Math.random() * 3);
  return computerPick;
}

//0=rock
//1=paper
//2=scissors

rock.addEventListener("click", () => {
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("rockPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    console.log("tie");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    console.log("U loose");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    console.log("U win");
  }
});

paper.addEventListener("click", () => {
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("paperPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    console.log("U win");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    console.log("tie");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    console.log("U loose");
  }
});

scissors.addEventListener("click", () => {
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("scissorsPick");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    console.log("U loose");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    console.log("U win");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    console.log("Tie");
  }
});
