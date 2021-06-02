import { v4 as uuiv4 } from "uuid";
import { ADD_TODO, DELETE_TODO } from "../action.types";

const initialState = [
  { id: uuiv4(), todo: "Manger", completed: false },
  { id: uuiv4(), todo: "Aller à la salle de Gymn", completed: false },
];

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      { id: uuiv4(), todo: action.payload.todo, completed: false },
    ];
  }
  if (action.type === DELETE_TODO) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  return state;
};
