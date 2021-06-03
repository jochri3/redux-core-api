import { FORM_RESET, FORM_UPDATE_INPUT_FIELD } from "../action.types";

const initialState = {
  todoForm: { todoName: "" },
};

export const formReducer = (state = initialState, action) => {
  if (action.type === FORM_UPDATE_INPUT_FIELD) {
    return { ...state, todoForm: { todoName: action.payload.value } };
  }

  if (action.type === FORM_RESET) {
    return { ...state, todoForm: { todoName: "" } };
  }

  return state;
};
