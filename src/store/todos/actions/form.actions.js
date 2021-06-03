import { FORM_RESET, FORM_UPDATE_INPUT_FIELD } from "../action-types";

export const updateFormField = (value) => ({
  type: FORM_UPDATE_INPUT_FIELD,
  payload: { value },
});

export const resetForm = () => ({ type: FORM_RESET });
