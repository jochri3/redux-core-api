import { SELECT_TODO } from "../action-types";

export const todoReducer = (state = null, action, todosState) => {
  if (action.type === SELECT_TODO) {
    console.log("todosState inside IF: ", todosState);
    return todosState.todos.find((todo) => todo.id === action.payload.id);
  }
  return state;
};
