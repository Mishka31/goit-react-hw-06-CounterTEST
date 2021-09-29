import { createStore } from "redux";

const reducer = (state = {}, action) => {
  console.log("Log action", action);
  return state;
};

const store = createStore(reducer);

export default store;
