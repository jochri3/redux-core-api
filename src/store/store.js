import { compose, createStore, applyMiddleware } from "redux";
import { asyncMiddleware } from "./middlewares/async";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";




const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(asyncMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = store;
