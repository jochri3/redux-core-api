import axios from "axios";
import { FETCH_USERS } from "./users.action-types";

export const fetchUsers = () => {
  const res = axios.get("http://jsonplaceholder.typicode.com/users");
  return {
    type: FETCH_USERS,
    payload: res,
  };
};
