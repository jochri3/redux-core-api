import { deleteTodo, toggleTodo } from "../store/todos/actions";
import { selectTodo } from "../store/todos/actions/todo.action";

export const TodoItem = ({ id, todo, completed }) => {
  const li = document.createElement("li");
  const todoName = document.createTextNode(todo);
  li.classList.add("todo");
  if (completed) {
    li.classList.add("completed");
  }

  li.appendChild(todoName);

  //view button
  const viewButton = document.createElement("button");
  const viewButtonName = document.createTextNode("Voir");
  viewButton.appendChild(viewButtonName);
  li.appendChild(viewButton);
  viewButton.addEventListener("click", store.dispatch(selectTodo(id)));

  //button
  const deleteButton = document.createElement("button");
  const deleteButtonName = document.createTextNode("X");
  deleteButton.appendChild(deleteButtonName);
  li.appendChild(deleteButton);
  li.addEventListener("click", () => store.dispatch(toggleTodo(id)));

  //add delete methode
  deleteButton.addEventListener("click", () => store.dispatch(deleteTodo(id)));
  return li;
};
