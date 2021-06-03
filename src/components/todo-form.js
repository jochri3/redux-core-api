import { addTodo, resetForm, updateFormField } from "../store/todos/actions";

const todoForm = document.querySelector("#todo-form");
const todoName = document.querySelector("#todo");
todoName.value = store.getState().todoForm.todoName;

todoForm.addEventListener("input", (event) => {
  store.dispatch(updateFormField(event.target.value));
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch(addTodo());
  store.dispatch(resetForm());
});

store.subscribe(() => {
  todoName.value = store.getState().todoForm.todoName;
});
