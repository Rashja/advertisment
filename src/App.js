import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Routes from "./routes/index";
import "./styles/_styles.scss";

const Jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(Jsx, document.getElementById("root"));
