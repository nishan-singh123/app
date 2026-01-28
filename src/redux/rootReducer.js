import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  userPreferences: userPreferenceReducer,
});

export default rootReducer;
