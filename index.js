//func to print api data
const printData = (data) => {
  const todosContainer = document.querySelector("#todos");
  for (let i = 0; i < data.length; i++) {
    let html = renderJson(data[i]);
    todosContainer.appendChild(html);
  }
  
}; 
// func arrange loading message and api data
document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards");

  if (cardsContainer) {
    fetchData();
    cardsContainer.classList.remove("loading-cards");
  }
});

// func that renders data from api to list element...
const renderJson = (data) => {
  var ul = document.createElement("ul");
  ul.classList.add("list");
  ul.innerHTML = "<li>" + data.title + "</li> <li>" + data.completed + "</li>";
  console.log(ul);
  return ul;
};
// func to hide loading message
const hideLoadingMessage = () => {
  const loadingMessage = document.getElementById("loading");
  loadingMessage.style.display = "none";
};

// func pulling data from api...
const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
  const res = await fetch(url);
  const data = await res.json();
  hideLoadingMessage();
  printData(data);
};

// func clear form items...
const clearForm = async () => {
  document.getElementById("todosForm").reset();
};
// func to add an element to the list...
const printUserData = () => {
  const todosContainer = document.querySelector("#todos");
  const titleValue = document.querySelector("#title").value;
  if (titleValue.trim() === "") {
    alert( "Please add at least one title.");
  } else {
    const checkbox = document.querySelector("#completed");
    const ulElement = document.createElement("ul");
    ulElement.classList.add("list");
    ulElement.innerHTML =
      "<li>" +
      titleValue +
      "</li> <li>" +
      (checkbox.checked ? "true" : "false") +
      "</li>";
    todosContainer.appendChild(ulElement);
    clearForm();
  }
};


