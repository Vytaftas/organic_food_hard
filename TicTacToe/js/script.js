let boxClass = document.getElementsByClassName("box");
let turnText = document.querySelector(".whosTurn");
let btnStart = document.querySelector(".btn-start");
let btnRestart = document.querySelector(".btn-restart");
let gridContainer = document.querySelector(".grid").getElementsByTagName("div");
let overlayContainer = document.getElementById("overlay");
let gridId = document.getElementById("gridContainer");
let turn = "blue";
let gameOver = 0;

function boxChange() {
  for (var i = 0; i < boxClass.length; i++) {
    boxClass[i].onclick = function () {
      //If gameover = 1 ; stop
      if (gameOver === 1) {
        return;
      }
      //Add blue/red class on a grid box
      if (!this.classList.contains("blue") && !this.classList.contains("red")) {
        if (turn === "blue") {
          this.classList.add("blue");
          turn = "red";
          turnText.innerHTML = "Red Turn";
          turnText.style.color = "red";
        } else if (turn === "red") {
          this.classList.add("red");
          turn = "blue";
          turnText.innerHTML = "Blue Turn";
          turnText.style.color = "blue";
        }
      }
      //check
      removeBgImage();
      checkGameOver();
      whoWins("blue", blueWins);
      whoWins("red", redWins);
      gameOverlay();
      ifGameOver();
    };

    // Add/Remove stuff on mouse enter/leave
    boxClass[i].onmouseover = function () {
      if (gameOver === 1) {
        return;
      }
      if (turn === "blue") {
        if (
          !this.classList.contains("red") &&
          !this.classList.contains("blue") &&
          !this.classList.contains("redD") &&
          !this.classList.contains("blueE")
        ) {
          this.classList.add("blueE");
        }
      } else if (turn === "red") {
        if (
          !this.classList.contains("red") &&
          !this.classList.contains("blue") &&
          !this.classList.contains("redD") &&
          !this.classList.contains("blueE")
        ) {
          this.classList.add("redD");
        }
      }
    };

    boxClass[i].onmouseleave = function () {
      this.classList.remove("blueE");
      this.classList.remove("redD");
    };
  }
}

btnStart.onclick = function () {
  restartGame();
  boxChange();
};

btnRestart.onclick = function () {
  restartGame();
  boxChange();
};
