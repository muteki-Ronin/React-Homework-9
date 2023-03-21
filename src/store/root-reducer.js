// CORE
import { combineReducers } from "redux";
// REDUCERS
import { usersReducer } from "./reducers/usersReducer";

export const rootReducer = combineReducers({
  usersReducer,
});
