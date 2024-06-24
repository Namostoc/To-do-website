const taskInfo = document.getElementById("task-info");
const createList = document.getElementById("list-container");
const showAlert = document.getElementsByClassName('infospan')

const addTask = () => {
  if (taskInfo.value === "") {
    alert('You must write some task!!')
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInfo.value;
    createList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskInfo.value = "";
  saveData();
};

// const showAlert = () => {
//     let showSpan = document.getElementsByClassName('infospan')
//     if(showSpan.style.display === 'none'){
//         showSpan.style.display = 'block'
//     } else {
//         showSpan.style.display = 'none'
//     }
// }

createList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", createList.innerHTML);
};

const showData = () => {
  createList.innerHTML = localStorage.getItem("data");
};

showData();
