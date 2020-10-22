//Check if all boxes are full
function checkGameOver() {
  if (
    (gridContainer[0].classList.contains("red") ||
      gridContainer[0].classList.contains("blue")) &&
    (gridContainer[1].classList.contains("red") ||
      gridContainer[1].classList.contains("blue")) &&
    (gridContainer[2].classList.contains("red") ||
      gridContainer[2].classList.contains("blue")) &&
    (gridContainer[3].classList.contains("red") ||
      gridContainer[3].classList.contains("blue")) &&
    (gridContainer[4].classList.contains("red") ||
      gridContainer[4].classList.contains("blue")) &&
    (gridContainer[5].classList.contains("red") ||
      gridContainer[5].classList.contains("blue")) &&
    (gridContainer[6].classList.contains("red") ||
      gridContainer[6].classList.contains("blue")) &&
    (gridContainer[7].classList.contains("red") ||
      gridContainer[7].classList.contains("blue")) &&
    (gridContainer[8].classList.contains("red") ||
      gridContainer[8].classList.contains("blue"))
  ) {
    gameOver = 1;
    nooneWins();
  } else {
    gameOver = 0;
  }
}
function ifGameOver() {
  if (gameOver === 1) {
    overlayContainer.style.top = "255px";
  }
}

//Winning combination check
function whoWins(color, team) {
  if (
    gridContainer[0].classList.contains(color) &&
    gridContainer[1].classList.contains(color) &&
    gridContainer[2].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[3].classList.contains(color) &&
    gridContainer[4].classList.contains(color) &&
    gridContainer[5].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[6].classList.contains(color) &&
    gridContainer[7].classList.contains(color) &&
    gridContainer[8].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[0].classList.contains(color) &&
    gridContainer[4].classList.contains(color) &&
    gridContainer[8].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[2].classList.contains(color) &&
    gridContainer[4].classList.contains(color) &&
    gridContainer[6].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[0].classList.contains(color) &&
    gridContainer[3].classList.contains(color) &&
    gridContainer[6].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[1].classList.contains(color) &&
    gridContainer[4].classList.contains(color) &&
    gridContainer[7].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  } else if (
    gridContainer[2].classList.contains(color) &&
    gridContainer[5].classList.contains(color) &&
    gridContainer[8].classList.contains(color)
  ) {
    gameOver = 1;
    team();
  }
}

//Remove temporary image class on hover
function removeBgImage() {
  for (var i = 0; i < gridContainer.length; i++) {
    if (
      gridContainer[i].classList.contains("red") ||
      gridContainer[i].classList.contains("blue")
    ) {
      gridContainer[i].classList.remove("redD");
      gridContainer[i].classList.remove("blueE");
      console.log(gridContainer[i].classList + " " + "contains red or blue");
    }
  }
}

//If blue wins
function blueWins() {
  if (gameOver === 1) {
    turnText.style.color = "blue";
    turnText.innerHTML = "BLUE WINS";
  }
}

//If red wins
function redWins() {
  if (gameOver === 1) {
    turnText.style.color = "red";
    turnText.innerHTML = "RED WINS";
  }
}

//if No one wins
function nooneWins() {
  turnText.style.color = "black";
  turnText.innerHTML = "NO ONE WINS";
}

//Restart game
function restartGame() {
  gameOver = 0;
  turn = "blue";
  turnText.innerHTML = "Blue Turn";
  turnText.style.color = "blue";
  gridId.style.opacity = "1";
  overlayContainer.style.opacity = "0";
  overlayContainer.style.top = "-100px";
  for (var i = 0; i < boxClass.length; i++) {
    boxClass[i].classList.remove("blue");
    boxClass[i].classList.remove("blueE");
    boxClass[i].classList.remove("red");
    boxClass[i].classList.remove("redD");
  }
}

//Overlay on game over
function gameOverlay() {
  if (gameOver === 1) {
    gridId.style.opacity = "0.6";
    overlayContainer.style.opacity = "1";
    console.log("GAME OVER");
  } else {
    gridId.style.opacity = "1";
    overlayContainer.style.opacity = "0";
  }
}
