import { FETCH_USERS } from "./users.action-types";

export const usersReducer = (state = [], action) => {
  if (action.type === FETCH_USERS) {
    return action.payload;
  }
  return state;
};
