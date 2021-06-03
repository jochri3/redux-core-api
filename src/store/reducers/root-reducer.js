import { combineReducers } from "redux";
import { formReducer } from "./form-reducer";
import { todoReducer } from "./todo-reducer";

export const rootReducer = combineReducers({
  todoForm: formReducer,
  todos: todoReducer,
});
