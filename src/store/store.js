import { compose, createStore, applyMiddleware } from "redux";
import { asyncMiddleware } from "./middlewares/async";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

const middlewares = [asyncMiddleware];
if (process.env.NODE_ENV !== "production") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV !== "production" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = store;
