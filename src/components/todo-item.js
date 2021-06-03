import { deleteTodo, toggleTodo } from "../store/todos/actions";

export const TodoItem = ({ id, todo, completed }) => {
  const li = document.createElement("li");
  const todoName = document.createTextNode(todo);
  li.classList.add("todo");
  if (completed) {
    li.classList.add("completed");
  }

  li.appendChild(todoName);

  //button
  const deleteButton = document.createElement("button");
  const deleteButtonName = document.createTextNode("X");
  li.appendChild(deleteButton);
  li.addEventListener("click", () => store.dispatch(toggleTodo(id)));

  //add delete methode
  deleteButton.appendChild(deleteButtonName);
  deleteButton.addEventListener("click", () => store.dispatch(deleteTodo(id)));
  return li;
};
