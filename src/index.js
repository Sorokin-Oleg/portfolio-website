import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import modalReduser from "./reducers/modalReduser";
import App from "./App";

import "./scss/main.scss";

const store = createStore(modalReduser);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("react-root")
);
