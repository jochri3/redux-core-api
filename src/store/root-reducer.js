import { combineReducers } from "redux";
import { formReducer, todosReducer, specialAddReducer } from "./todos/reducers";
import { ADD_TODO, SELECT_TODO } from "./todos/action-types";

const combinedReducer = combineReducers({
  todoForm: formReducer,
  todos: todosReducer,
  todo: todoReducer,
});

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todoForm: formReducer(state.todoForm, action),
        todos: specialAddReducer(state.todos, action, state.todoForm),
      };
    }
    case SELECT_TODO:
      return {
        todos: todosReducer(state.todos, action),
        todo: todoReducer(state.todo, action, state.todos),
      };
    default:
      return state;
  }
};

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
};
