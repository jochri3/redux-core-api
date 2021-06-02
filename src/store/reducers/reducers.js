import { v4 as uuiv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  FORM_UPDATE_INPUT_FIELD,
} from "../action.types";

const initialState = {
  todos: [
    { id: uuiv4(), todo: "Manger", completed: false },
    { id: uuiv4(), todo: "Aller à la salle de Gymn", completed: false },
  ],
  todoForm: { todoName: "" },
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: uuiv4(),
          todo: state.todoForm.todoName,
          completed: false,
        },
      ],
    };
  }
  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload.id),
    };
  }

  if (action.type === FORM_UPDATE_INPUT_FIELD) {
    return { ...state, todoForm: { todoName: action.payload.value } };
  }

  return state;
};
