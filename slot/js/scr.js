let slot = document.getElementById("slot");
let boxes = document.getElementsByClassName("box");
let creditContainer = document.getElementById("score");
let addScoreContainer = document.getElementById("addscore");
let spinButton = document.getElementById("spin-button");
let btnMinus = document.getElementById("button-minus");
let btnPlus = document.getElementById("button-plus");
let betSizeContainer = document.getElementById("bet-size");
let optionsButton = document.getElementById("options");
let optionsMenu = document.getElementById("option-box");
let optionsCloseButton = document.getElementById("close-button");
let optionsHowTo = document.getElementById("howto");
let betSize = 100;
let addScore = 0;
let win = false;
let score = 10000;
let symbols = [
  { id: "10", score: 0.5, color: "grey" },
  { id: "J", score: 1, color: "lightskyblue" },
  { id: "Q", score: 2.5, color: "green" },
  { id: "K", score: 5, color: "blue" },
  { id: "A", score: 10, color: "purple" },
];

//Show credits
creditContainer.innerHTML = `Credits: ${score}`;
//Show bet size
betSizeContainer.innerHTML = `Bet: ${betSize}`;

//Add score if there is a win
function scoreCheck(boxnum) {
  switch (boxes[boxnum].innerHTML) {
    case "10":
      score += symbols[0].score * betSize;
      addScore += symbols[0].score * betSize;
      break;
    case "J":
      score += symbols[1].score * betSize;
      addScore += symbols[1].score * betSize;
      break;
    case "Q":
      score += symbols[2].score * betSize;
      addScore += symbols[2].score * betSize;
      break;
    case "K":
      score += symbols[3].score * betSize;
      addScore += symbols[3].score * betSize;
      break;
    case "A":
      score += symbols[4].score * betSize;
      addScore += symbols[4].score * betSize;
  }
}

//Add blinking if there is a win
function addBlink(num1, num2, num3) {
  boxes[num1].classList.add("blink");
  boxes[num2].classList.add("blink");
  boxes[num3].classList.add("blink");
  boxes[num1].style.backgroundColor = "green";
  boxes[num2].style.backgroundColor = "green";
  boxes[num3].style.backgroundColor = "green";
}

function checkBoxes() {
  addScore = 0;
  if (
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[0].innerHTML === boxes[2].innerHTML
  ) {
    win = true;
    scoreCheck(0);
    addBlink(0, 1, 2);
    creditContainer.innerHTML = `Credits: ${score}`;
  }
  if (
    boxes[3].innerHTML === boxes[4].innerHTML &&
    boxes[3].innerHTML === boxes[5].innerHTML
  ) {
    win = true;
    scoreCheck(3);
    addBlink(3, 4, 5);
    creditContainer.innerHTML = `Credits: ${score}`;
  }
  if (
    boxes[6].innerHTML === boxes[7].innerHTML &&
    boxes[6].innerHTML === boxes[8].innerHTML
  ) {
    win = true;
    scoreCheck(6);
    addBlink(6, 7, 8);
    creditContainer.innerHTML = `Credits: ${score}`;
  }
  if (
    boxes[0].innerHTML === boxes[4].innerHTML &&
    boxes[0].innerHTML === boxes[8].innerHTML
  ) {
    win = true;
    scoreCheck(0);
    addBlink(0, 4, 8);
    creditContainer.innerHTML = `Credits: ${score}`;
  }
  if (
    boxes[6].innerHTML === boxes[4].innerHTML &&
    boxes[6].innerHTML === boxes[2].innerHTML
  ) {
    win = true;
    scoreCheck(6);
    addBlink(6, 4, 2);
    creditContainer.innerHTML = `Credits: ${score}`;
  }
  if (addScore > 0) {
    addScoreContainer.style.opacity = "1";
    addScoreContainer.innerHTML = `+${addScore}`;
  }
}

//-------------------------------------------------------//
//CLose Button
optionsCloseButton.onclick = function () {
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  // Check if the media query is true
  if (mediaQuery.matches) {
    optionsMenu.style.height = "0px";
    optionsCloseButton.style.opacity = "0";
    optionsHowTo.style.opacity = "0";

    setTimeout(function () {
      optionsMenu.style.display = "none";
      optionsHowTo.style.display = "none";
      optionsCloseButton.style.display = "none";
    }, 1000);
  } else {
    optionsMenu.style.width = "0px";
    optionsCloseButton.style.opacity = "0";
    optionsHowTo.style.opacity = "0";

    setTimeout(function () {
      optionsMenu.style.display = "none";
      optionsHowTo.style.display = "none";
      optionsCloseButton.style.display = "none";
    }, 1000);
  }
};

//Options Button
optionsButton.onclick = function () {
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  // Check if the media query is true
  if (mediaQuery.matches) {
    optionsMenu.style.top = "-340px";
    optionsMenu.style.width = window.outerWidth + "px";
    optionsMenu.style.height = "0px";
    optionsMenu.style.right = 0;
    optionsMenu.style.display = "block";
    optionsHowTo.style.display = "block";

    setTimeout(function () {
      optionsCloseButton.style.opacity = "1";
      optionsCloseButton.style.display = "inline-block";
      optionsMenu.style.height = window.outerHeight + "px";
      setTimeout(() => {
        optionsHowTo.style.opacity = "1";
      }, 200);
    }, 100);
  } else {
    optionsMenu.style.top = "-110px";
    optionsMenu.style.width = "0px";
    optionsMenu.style.height = "340px";
    optionsMenu.style.right = "-30px";
    optionsHowTo.style.display = "block";
    optionsMenu.style.display = "block";

    setTimeout(function () {
      optionsCloseButton.style.opacity = "1";
      optionsCloseButton.style.display = "inline-block";
      optionsMenu.style.width = "576%";

      setTimeout(() => {
        optionsHowTo.style.opacity = "1";
      }, 200);
    }, 100);
  }
};

//Minus Button
btnMinus.onclick = function () {
  if (betSize > 100) {
    betSize = betSize - 100;
    betSizeContainer.innerHTML = `Bet: ${betSize}`;
  }
};

//Plus Button
btnPlus.onclick = function () {
  betSize = betSize + 100;
  betSizeContainer.innerHTML = `Bet: ${betSize}`;
};

//Spin Button
spinButton.onclick = function () {
  //-100 credits every spin
  creditContainer.innerHTML = `Credits: ${(score -= betSize)}`;
  addScoreContainer.style.opacity = "0";
  addscore = 0;

  //Disable the button
  spinButton.setAttribute("disabled", "disabled");

  //Grey background for every box
  for (let x = 0; x < boxes.length; x++) {
    boxes[x].style.backgroundColor = "grey";
  }

  //Wait 1s to enable the button
  setTimeout(() => {
    spinButton.removeAttribute("disabled");
  }, 1000);

  //Add spinning animation class
  for (var x = 0; x < boxes.length; x++) {
    boxes[x].classList.add("spin");
  }
  //Remove spinning animation class after 1.2s
  setTimeout(() => {
    for (let x = 0; x < boxes.length; x++) {
      boxes[x].classList.remove("spin");
    }
  }, 1200);

  //Hide result while spinning
  for (let x = 0; x < boxes.length; x++) {
    boxes[x].innerHTML = "";
  }
  //Show result after 0.8s
  setTimeout(() => {
    //Create random symbol 10-J-Q-K-A
    for (let x = 0; x < boxes.length; x++) {
      boxes[x].innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)].id;
    }
    //Add symbol color

    // for (let z = 0; z < symbols.length; z++) {
    //   for (let c = 0; c < boxes.length; c++) {
    //     if (symbols[z].id === boxes[c].innerHTML) {
    //       boxes[c].style.backgroundColor = symbols[z].color;
    //     }
    //   }
    // }
  }, 800);

  setTimeout(() => {
    //Check winning lines
    checkBoxes();
    //If there is a winning combination
    if (win === true) {
      //Disable spin button
      spinButton.setAttribute("disabled", "disabled");

      //Enable button after 0.2s
      setTimeout(() => {
        spinButton.removeAttribute("disabled");
      }, 2000);
      //Remove blinking and border 1.5sec after winning
      setTimeout(() => {
        for (let x = 0; x < boxes.length; x++) {
          boxes[x].classList.remove("blink");
          boxes[x].style.border = "";
        }
      }, 1500);

      win = false;
    }
  }, 1000);

  if (score < 100) {
    score += 10000;
    creditContainer.innerHTML = `Credits: ${score}`;
  }
};
