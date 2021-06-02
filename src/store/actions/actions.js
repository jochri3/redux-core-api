import {
  ADD_TODO,
  DELETE_TODO,
  FORM_UPDATE_INPUT_FIELD,
} from "../action.types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
};
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const updateFormField = (value) => ({
  type: FORM_UPDATE_INPUT_FIELD,
  payload: { value },
});

export const resetForm = () => ({ type: FORM_RESET });
