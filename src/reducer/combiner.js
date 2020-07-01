import { combineReducers } from "redux";
// import { SIGNOUT_REQUEST } from '../actions/resetReducer'
import login from "./login";
import home from "./home";
import base from "./base";

const appReducer = combineReducers({ login, home, base });

const reducer = (state, action) => {
  //   if (action.type === SIGNOUT_REQUEST) {
  //     state = undefined;
  //   }
  return appReducer(state, action);
};

export default reducer;
