import { combineReducers } from "@reduxjs/toolkit";
import catReducer from "../features/cat/catState";

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;
