import { combineReducers } from "redux";
import user from "./user";
import budget from "./budget";

const rootReducer = combineReducers({
  user,
  budget,
});

export default rootReducer;
