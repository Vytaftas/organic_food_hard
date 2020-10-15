let btn01 = document.getElementById("01");
let btn02 = document.getElementById("02");
let btn03 = document.getElementById("03");
let burger = document.querySelector(".burger-icon");
let dropMenu = document.getElementById("dropdown-menu");
let a = document.querySelector(".tabs-page-text");
let a2 = document.querySelector(".tabs-page-text2");
let a3 = document.querySelector(".tabs-page-text3");

btn01.addEventListener("click", function () {
  a.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
});

btn02.addEventListener("click", function () {
  a.style.display = "none";
  a2.style.display = "block";
  a3.style.display = "none";
});

btn03.addEventListener("click", function () {
  a.style.display = "none";
  a2.style.display = "none";
  a3.style.display = "block";
});

burger.addEventListener("click", function () {
  if (dropMenu.style.height === "0px") {
    dropMenu.style.height = "210px";
  } else {
    dropMenu.style.height = "0px";
  }
});
