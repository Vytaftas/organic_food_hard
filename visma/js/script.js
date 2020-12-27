const mainContainer = document.querySelector(".main-container");

const description = document.querySelector(".description");

const deadlineCheckbox = document.querySelector(".deadline-check");
const deadline = document.querySelector(".deadline");

const addItemButton = document.querySelector(".add-item");

const itemContainer = document.querySelector(".item-container");

const storage = window.sessionStorage;

let getValues = getValuesAndSort(storage);

//Turn deadline on/off
deadlineCheckbox.addEventListener("change", () => {
  if (deadlineCheckbox.checked) {
    deadline.disabled = false;
  } else {
    deadline.disabled = true;
  }
});

//Draw on load
window.onload = () => {
  if (storage.length > 0) {
    drawItems();
  }
};

//"Add" Button
addItemButton.addEventListener("click", () => {
  let descriptionValue = description.value;
  let deadlineValue = deadline.value;
  descriptionValue = descriptionValue.replace(/<(?:.|\n)*?>/gm, "");

  //Firefox
  if (fallbackCheckbox.checked) {
    deadlineValue = `${yearSelect.value}-${monthSelect.value}-${daySelect.value}T${hourSelect.value}:${minuteSelect.value}`;
  }
  if (descriptionValue) {
    if (deadlineValue) {
      storage.setItem(descriptionValue, deadlineValue);
    } else {
      storage.setItem(descriptionValue, "");
    }
  }
  getValues = getValuesAndSort(storage);
  drawItems();
  description.value = "";
  deadline.value = "";
});
