import { compose, createStore, applyMiddleware } from "redux";
import { asyncMiddleware } from "./middlewares/async";
import { rootReducer } from "./root-reducer";

//initialState,enhances
const logger = (createStore) => (reducer) => {
  const loggerReducer = (state, action) => {
    console.log("prevstate : ", action, state);
    const newState = reducer(state, action);
    console.log("nextstate : ", newState);
    return newState;
  };
  return createStore(loggerReducer);
};

const performanceTest = (createStore) => (reducer) => {
  const logPerformance = (state, action) => {
    console.time("time elapsed");
    const newState = reducer(state, action);
    console.timeEnd("time elapsed");
    return newState;
  };

  return createStore(logPerformance);
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(asyncMiddleware),
    logger,
    performanceTest,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = store;
