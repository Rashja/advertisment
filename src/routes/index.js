import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Login} path="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
