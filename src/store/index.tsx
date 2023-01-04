import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterReducer from "./couter";
import todoListReducer from "./todo-list";

const reducer = combineReducers({
  counter: counterReducer,
  todoList: todoListReducer
});

export default configureStore({
  reducer,
});
