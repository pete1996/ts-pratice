import { combineReducers, ReducersMapObject } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { commonReducer, S } from "./reducer";

function rootReducer() {
  const moduleReducers: ReducersMapObject = {
    common: S,
  };

  return combineReducers(moduleReducers);
}

const devtool =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducer(), devTools: devtool });

export default store;
