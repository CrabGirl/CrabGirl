import Promise from "promise-polyfill"; // eslint-disable-line no-unused-vars
import Router from "./router";
import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

require("babel-core/register");
require("babel-polyfill");

// Fixes for Internet Explorer
if(!window.Promise) {
  window.Promise = Promise;
}

// Fixes for Internet Explorer
if(!String.prototype.contains) {
  String.prototype.contains = function(search, start) { // eslint-disable-line
    "use strict";
    if(typeof start !== "number") {
      start = 0;
    }

    if(start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// Fixes for Internet Explorer
if(!("classList" in SVGElement.prototype)) { // eslint-disable-line
  Object.defineProperty(SVGElement.prototype, "classList", { // eslint-disable-line
    get() {
      return{
        contains: className => {
          return this.className.baseVal.split(" ").indexOf(className) !== -1;
        }
      };
    }
  });
}

injectGlobal`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  *:before, *:after {
    box-sizing: border-box;
  }
`;

document.addEventListener("DOMContentLoaded", () => {
  render(<Router/>, document.getElementById("app-container"));
});
