import "./store/store";
import "./components/todos-list";
import "./components/todo-form";
import { fetchUsers } from "./store/users/users.actions";

//Test our promise based middleware
store.dispatch(fetchUsers());
