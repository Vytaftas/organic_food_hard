//Sort by Date
function sortByDate(a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  if (dateA > dateB) {
    return 1;
  } else {
    return -1;
  }
}

//Sort None
function sortNone(str) {
  //Firefox
  if (fallbackPicker.style.display === "none") {
    if (str.date === "none") {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (str.date === "none") {
      return -1;
    } else {
      return 1;
    }
  }
}

//Sort Completed
function sortCompleted(str) {
  //Firefox
  if (fallbackPicker.style.display === "none") {
    if (str.date === "completed") {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (str.date === "completed") {
      return -1;
    } else {
      return 1;
    }
  }
}

//Get Values from Storage and sort
const getValuesAndSort = (strg) => {
  let arr = [];
  for (let i = 0; i < strg.length; i++) {
    const key = strg.key(i);
    let keyValue = strg.getItem(key).replace("T", " ");

    if (compareTime(keyValue) === true) {
      keyValue = "completed";
    } else if (keyValue === "") {
      keyValue = "none";
    } else {
      keyValue = compareTime(keyValue);
    }

    arr.push({ descr: key, date: keyValue });
  }

  arr.sort(sortNone);
  arr.sort(sortCompleted);
  arr.sort(sortByDate);
  return arr;
};

// Get current Date
const getCurrentDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hours = today.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

//Compare date added vs real date
function compareTime(myval) {
  let myDate = new Date(myval).getTime();
  let realDate = new Date(getCurrentDate()).getTime();

  if (myDate < realDate) {
    return true;
  } else {
    return myval;
  }
}

//Draw item list
const drawItems = () => {
  itemContainer.innerHTML = `
    <li class="structure status-completed">
          <p>Check</p>
          <p>Description</p>
          <p>Status</p>
          <p>Delete</p>
    </li>
    `;
  for (let i = 0; i < getValues.length; i++) {
    //arr values
    const key = getValues[i].descr;
    const date = getValues[i].date;

    let time = new Date(date).getTime();
    const currDate = new Date(getCurrentDate());

    //Set days/hours/minutes
    const dataToMinute = (time - currDate) / 1000 / 60;
    const days = Math.floor(dataToMinute / 1440);
    const hours = Math.floor((dataToMinute % 1440) / 60);
    const mins = dataToMinute % 60;

    //Create Li
    const createListContainer = document.createElement("li");
    createListContainer.classList.add("item");

    //Create Checkbox
    const createCheckbox = document.createElement("input");
    createCheckbox.setAttribute("type", "checkbox");

    //Create Description
    const createDescription = document.createElement("p");
    createDescription.classList.add("description");

    //Create Date
    const createDate = document.createElement("p");
    createDate.classList.add("date");

    //Create Delete Button
    const createDeleteButton = document.createElement("button");
    createDeleteButton.innerHTML = "Delete";
    createDeleteButton.classList.add("delete-button");

    //Check the status
    if (date === "completed") {
      createDescription.innerHTML = key;
      createDate.innerHTML = "completed";
      createCheckbox.checked = true;
      createCheckbox.disabled = true;
      createDescription.classList.add("checked-item");
      createListContainer.classList.add("status-completed");
    } else if (date === "none") {
      createDescription.innerHTML = key;
      createDate.innerHTML = "none";
      createListContainer.classList.add("status-none");
    } else {
      createDescription.innerHTML = key;
      createDate.innerHTML = `${days}d ${hours}h ${mins}m Left`;
      createListContainer.classList.add("status-active");
    }

    //Append everything
    createListContainer.appendChild(createCheckbox);
    createListContainer.appendChild(createDescription);
    createListContainer.appendChild(createDate);
    createListContainer.appendChild(createDeleteButton);
    itemContainer.appendChild(createListContainer);

    //Checkbox
    createCheckbox.addEventListener("change", () => {
      if (confirm("Mark as completed?")) {
        for (let j = 0; j < storage.length; j++) {
          //if arr value === storage value
          let getKey = storage.key(j);
          if (key === getKey) {
            storage.setItem(getKey, "1000-10-10T10:10");
            itemContainer.innerHTML = "";
            getValues = getValuesAndSort(storage);
            drawItems();
          }
        }
      } else {
        createCheckbox.checked = false;
        return;
      }
    });

    //Delete button
    createDeleteButton.addEventListener("click", () => {
      if (createDeleteButton) {
        if (confirm("Delete this item?")) {
          for (let x = 0; x < storage.length; x++) {
            //if arr value === storage value
            if (key === storage.key(x)) {
              sessionStorage.removeItem(key);
              createListContainer.remove();
            }
          }
        } else {
          return;
        }
      }
    });
  }
};
