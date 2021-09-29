import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/store.js";
import { myAction1 } from "./redux/action.js";
import App from "./App";

console.log(store);
console.log(store.getState());
console.log(store.dispatch(myAction1));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
