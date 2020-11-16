import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/list">
          <ListPage></ListPage>
        </Route>
        <Route path="/detail">
          <DetailPage></DetailPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
