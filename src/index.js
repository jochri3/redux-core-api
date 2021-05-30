import { createStore } from "redux";

const reducer = () => {
  return ["a", "b", "c", "ef"];
};

const store = createStore(reducer);

window.store = store;
