import { createStore, combineReducers } from "redux";
import types from "./counter-type.js";

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload;

    case types.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};
const stepReducer = (state = 15, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
