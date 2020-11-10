burger.onclick = function () {
  if (burgerMenu.style.height === "" || burgerMenu.style.height === "0px") {
    burgerMenu.style.height = "200px";
    navigation.style.transition = "0.5s";
    burgerMenu.style.transition = "0.5s";
    burgerMenu.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  } else {
    burgerMenu.style.height = "0px";
    burgerMenu.style.backgroundColor = "transparent";
    navigation.style.backgroundColor = "transparent";
  }
};
