import Colors from "./colors";
import Dimensions from "./dimensions";
import Page from "./page";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

class Router extends React.Component {
  render() {
    const theme = {
      colors: Colors,
      dimensions: Dimensions
    };

    return(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="*" component={Page}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

module.exports = Router;
