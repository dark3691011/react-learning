import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterReducer from "./couter";

const reducer = combineReducers({
  counter: counterReducer,
});

export default configureStore({
  reducer,
});
