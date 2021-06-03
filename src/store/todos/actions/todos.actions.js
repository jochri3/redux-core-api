import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../action-types";

export const addTodo = () => {
  return {
    type: ADD_TODO,
  };
};
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: { id } });
