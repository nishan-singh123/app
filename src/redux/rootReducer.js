import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  userPreferences: userPreferenceReducer,
});

export default rootReducer;
