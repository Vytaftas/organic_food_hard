body.onscroll = function () {
  if (window.pageYOffset > 100) {
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navigation.style.transition = "0.5s";
    burgerMenu.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    burgerMenu.style.transition = "0.5s";
  } else {
    navigation.style.backgroundColor = "transparent";
    burgerMenu.style.backgroundColor = "transparent";
  }
};
