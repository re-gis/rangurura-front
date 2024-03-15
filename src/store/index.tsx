import { createStore } from "redux";
import userReducer from "./reducers/users.reducers";

export const store = createStore(userReducer);
