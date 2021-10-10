import React from "react";
import Login from "../login/Login"
import Register from "../register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
