import { SELECT_TODO } from "../action-types";

export const selectTodo = (id) => ({
  type: SELECT_TODO,
  payload: { id },
});
