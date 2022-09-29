import { combineReducers } from "redux";
import { userReducer } from "./UseReducer";


/* Combining the reducers. */
const rootReducer = combineReducers({
    user:userReducer,
});

export default rootReducer;