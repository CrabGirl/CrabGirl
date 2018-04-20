import Page from "./page";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Router extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="*" component={Page}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

module.exports = Router;
