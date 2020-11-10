let body = document.getElementById("body");

let searchButton = document.getElementById("search");
let searchField = document.getElementById("searchfield");

let navigation = document.getElementById("nav");

let mainIMG = document.getElementById("mainimg");
let options = document.getElementsByClassName("option");
let border = document.getElementsByClassName("option-border");
let redBorder = document.getElementsByClassName("option-red-border");

let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let txt4 = document.getElementById("txt4");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let burger = document.getElementById("burger");
let burgerMenu = document.getElementById("burger-menu");
let burgerSelection = burgerMenu.getElementsByTagName("p");

function startWidth() {
  let a = border[0].clientWidth;
  redBorder[0].style.width = a / 4 + "px";

  for (var i = 0; i < border.length; i++) {
    border[i].style.opacity = "0.5";
  }
  border[0].style.opacity = "1";
}
