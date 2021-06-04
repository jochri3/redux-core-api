import { deleteTodo, toggleTodo } from "../store/todos/actions";

const deleteTodoItem = (id) => {
  store.dispatch(deleteTodo(id));
};

const toggleTodoItem = (id) => {
  store.dispatch(toggleTodo(id));
};

export const TodoItem = ({ id, todo, completed }) => {
  const todoItem = document.createElement("li");
  todoItem.appendChild(document.createTextNode(todo));

  todoItem.classList.add("todo");
  if (completed) {
    todoItem.classList.add("completed");
  }

  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));

  todoItem.appendChild(deleteButton);
  todoItem.addEventListener("click", () => toggleTodoItem(id));

  deleteButton.addEventListener("click", () => deleteTodoItem(id));
  return todoItem;
};
