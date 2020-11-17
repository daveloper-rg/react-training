import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage, CredentialProvider } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <CredentialProvider>
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
    </CredentialProvider>
  );
};
