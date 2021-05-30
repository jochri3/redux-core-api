//It's used inside the applyMiddleware function



import { compose,combineReducers,applyMiddleware,createStore,bindActionCreators } from "redux";



import { addDot, addSpaceDelimiter, capitalize } from "./utils";

//My way of doing things
const manualCompose = (str) => {
  return addDot(capitalize(addSpaceDelimiter(str, "-")));
};

console.log(manualCompose("je-suis-dans-la-joie"));

window.manualCompose = manualCompose;

//With compose
const composeWithRedux = compose(addDot, capitalize, addSpaceDelimiter);

window.compose = compose;
window.composeWithRedux = composeWithRedux;
