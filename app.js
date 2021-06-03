const addTodo = document.querySelector(".new-task-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector("span");

addTodo.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
