import { compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";

//initialState,enhances
const logger = (createStore) => (reducer) => {
  const loggerReducer = (state, action) => {
    console.log("prevstate : ", state);
    const newState = reducer(state, action);
    console.log("nextstate : ", newState);
    return newState;
  };
  return createStore(loggerReducer);
};

const store = createStore(
  rootReducer,
  logger

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
