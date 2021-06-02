import { addTodo, updateFormField } from "../store/actions/actions";

const todoForm = document.querySelector("#todo-form");
const todoName = document.querySelector("#todo");
todoName.value = store.getState().todoForm.todoName;

todoForm.addEventListener("input", (event) => {
  store.dispatch(updateFormField(event.target.value));
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch(addTodo(formData["todo"]));
  todoName.value = "";
});
