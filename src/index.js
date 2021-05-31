import { createStore } from "redux";
import { v4 as uuiv4 } from "uuid";
import { allTodos } from "./todos-list.js";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "ADD_TODO";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
};
const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

const initialState = [
  { id: uuiv4(), todo: "Manger", completed: false },
  { id: uuiv4(), todo: "Aller à la salle de Gymn", completed: false },
];

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      { id: uuiv4(), todo: action.payload.name, completed: false },
    ];
  }
  if (action.type === DELETE_TODO) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  return state;
};

const store = createStore(reducer);

window.store = store;

allTodos();
