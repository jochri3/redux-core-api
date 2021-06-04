import { combineReducers } from "redux";
import { formReducer, todoReducer, specialAddReducer } from "./todos/reducers";
import { ADD_TODO } from "./todos/action-types";
import { usersReducer } from "./users/users.reducer";

const combinedReducer = combineReducers({
  todoForm: formReducer,
  todos: todoReducer,
  users: usersReducer,
});

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todoForm: formReducer(state.todoForm, action),
        todos: specialAddReducer(state.todos, action, state.todoForm),
      };
    }
    default:
      return state;
  }
};

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
};
