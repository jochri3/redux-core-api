import { addTodo, updateFormField } from "../store/actions/actions";

const todoForm = document.querySelector("#todo-form");
const todoName = document.querySelector("#todo");
todoName.value = store.getState().todoForm.todoName;

todoForm.addEventListener("input", (event) => {
  store.dispatch(updateFormField(event.target.value));
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch(addTodo());
  todoName.value = "";
});

//A l'intérieur de la fonction dispatch on doit encore invoquer getState()
//Controlled input
window.store.subscribe(() => {
  todoName.value = store.getState().todoForm.todoName;
});
