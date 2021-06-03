import { v4 as uuiv4 } from "uuid";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../action-types";

const initialState = {
  todos: [
    { id: uuiv4(), todo: "Manger", completed: false },
    { id: uuiv4(), todo: "Aller à la salle de Gymn", completed: false },
  ],
};

export const todoReducer = (state = initialState, action) => {
  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload.id),
    };
  }

  if (action.type === TOGGLE_TODO) {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: todo.completed ? false : true };
        }
        return todo;
      }),
    };
  }

  return state;
};

export const specialAddReducer = (state, action, form) => {
  if (action.type === ADD_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: uuiv4(),
          todo: form.todoName,
          completed: false,
        },
      ],
    };
  }
};
