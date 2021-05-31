import { addTodo } from "../store/actions";

const todoForm = document.querySelector("#todo-form");
const formData = {};

todoForm.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch(addTodo(formData["todo"]));
});