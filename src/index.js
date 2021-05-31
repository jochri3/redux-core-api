import { createStore } from "redux";
import { v4 as uuiv4 } from "uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "ADD_TODO";

const addTodo = (name) => {
  return {
    type: ADD_TODO,
    payload: { name },
  };
};
const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

const initialState = [
  { id: uuiv4(), todo: "Manger" },
  { id: uuiv4(), todo: "Aller à la salle de Gymn" },
];

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [...state, { id: uuiv4(), name: action.payload.name }];
  }
  if (action.type === DELETE_TODO) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  return state;
};

const store = createStore(reducer);

window.store = store;
