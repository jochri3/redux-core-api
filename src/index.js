import { createStore } from "redux";
import { v4 as uuiv4 } from "uuid";

const initialState = [
  { id: uuiv4(), todo: "Manger" },
  { id: uuiv4(), todo: "Aller à la salle de Gymn" },
];

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

window.store = store;
