import { createStore } from "redux";

const store = createStore(() => ["a", "b", "c"], [1, 2, 3]);

window.store = store;
