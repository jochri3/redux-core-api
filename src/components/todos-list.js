import { TodoItem } from "./todo-item";

const todoList = document.getElementById("todo-list");

export const allTodos = () => {
  const todos = store.getState();
  for (let todo of todos) {
    todoList.appendChild(TodoItem({ ...todo }));
  }
};

allTodos();
