// SEARCH BUTTON
searchButton.onclick = function () {
  if (
    searchField.style.display === "" ||
    searchField.style.display === "none"
  ) {
    searchField.style.display = "block";
  } else {
    searchField.style.display = "none";
  }
};
