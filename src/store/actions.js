import { ADD_TODO, DELETE_TODO } from "./action.types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
};
export const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};
