btn1.onclick = function () {
  for (i = 0; i < redBorder.length; i++) {
    let a = border[0].clientWidth;
    let rdBord = this.getElementsByClassName("option-red-border")[0];
    redBorder[i].style.width = "0px";
    rdBord.style.width = a / 4 + "px";

    border[i].style.opacity = "0.5";
    this.children[0].style.opacity = "1";
  }

  txt1.style.left = "0px";
  txt2.style.left = "1500px";
  txt3.style.left = "3000px";
  txt4.style.left = "4500px";
};
btn2.onclick = function () {
  for (i = 0; i < redBorder.length; i++) {
    let a = border[1].clientWidth;
    let rdBord = this.getElementsByClassName("option-red-border")[0];
    redBorder[i].style.width = "0px";
    rdBord.style.width = a / 2.5 + "px";

    border[i].style.opacity = "0.5";
    this.children[0].style.opacity = "1";
  }
  txt1.style.left = "-1500px";
  txt2.style.left = "0px";
  txt3.style.left = "1500px";
  txt4.style.left = "3000px";
};
btn3.onclick = function () {
  for (i = 0; i < redBorder.length; i++) {
    let a = border[2].clientWidth;
    let rdBord = this.getElementsByClassName("option-red-border")[0];
    redBorder[i].style.width = "0px";
    rdBord.style.width = a / 1.5 + "px";

    border[i].style.opacity = "0.5";
    this.children[0].style.opacity = "1";
  }
  txt1.style.left = "-3000px";
  txt2.style.left = "-1500px";
  txt3.style.left = "0px";
  txt4.style.left = "1500px";
};
btn4.onclick = function () {
  for (i = 0; i < redBorder.length; i++) {
    let a = border[3].clientWidth;
    let rdBord = this.getElementsByClassName("option-red-border")[0];
    redBorder[i].style.width = "0px";
    rdBord.style.width = a + "px";

    border[i].style.opacity = "0.5";
    this.children[0].style.opacity = "1";
  }
  txt1.style.left = "-4500px";
  txt2.style.left = "-3000px";
  txt3.style.left = "-1500px";
  txt4.style.left = "0px";
};
