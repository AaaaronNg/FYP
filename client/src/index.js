import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import { Provider } from "react-redux"
import ReduxSore from "./store"

// redux => redux JS library and cannot connect to react
// react-rudux is a bridge to connect redux


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxSore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
