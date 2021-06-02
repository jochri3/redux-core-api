import { TodoItem } from "./todo-item";

const todoList = document.getElementById("todo-list");

export const allTodos = () => {
  todoList.innerHTML = "";
  const todos = store.getState().todos;
  for (let todo of todos) {
    todoList.appendChild(TodoItem({ ...todo }));
  }
};

allTodos();

store.subscribe(() => {
  allTodos();
});
