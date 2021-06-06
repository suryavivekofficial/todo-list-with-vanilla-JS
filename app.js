//Selections
const addTodo = document.querySelector(".new-task-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector("span");
const addTodoInput = document.querySelector(".add-todo");
const addTodoBtn = document.querySelector(".add-todo-btn");
const todoPane = document.querySelector(".todo-pane");

//Event Listeners
//ModalPopup
addTodo.addEventListener("click", openModel);

closeModal.addEventListener("click", closeModalfun);

//Taking Input for new todo
addTodoBtn.addEventListener("click", () => {
  const newTodo = addTodoInput.value;
  if (newTodo == "") {
    alert("The field is empty!");
  } else {
    addNewTodo(newTodo);
  }
});

function addNewTodo(newTodo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos");
  todoDiv.innerHTML = ` <label class="todo"><input type="checkbox" class="checkbox-round">${newTodo}</label><div class="trash"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="trash-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></div>`;
  todoPane.appendChild(todoDiv);
  clearInput();
  closeModalfun();
}

function closeModalfun() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function openModel() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function clearInput() {
  addTodoInput.value = "";
}
