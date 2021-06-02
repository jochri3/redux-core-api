import {
  ADD_TODO,
  DELETE_TODO,
  FORM_UPDATE_INPUT_FIELD,
  TOGGLE_TODO,
} from "../action.types";

export const addTodo = () => {
  return {
    type: ADD_TODO,
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

export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: { id } });

export const resetForm = () => ({ type: FORM_RESET });
