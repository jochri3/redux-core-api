import { FORM_RESET, FORM_UPDATE_INPUT_FIELD } from "../action-types";

const initialState = {
  todoName: "",
};

export const formReducer = (state = initialState, action) => {
  if (action.type === FORM_UPDATE_INPUT_FIELD) {
    return { ...state, todoName: action.payload.value };
  }

  if (action.type === FORM_RESET) {
    return { ...state, todoName: "" };
  }

  return state;
};
