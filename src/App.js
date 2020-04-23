import React from 'react';
import { Global, css } from '@emotion/core';
import Router from './Router';

const globalStyles = css`
  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: auto;
  }

  html, body {
    color: #555555;
    background-color: #2C3E50;
    font-family: sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    height: 100%;

    #app {
      height: 100%;
      margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
    }

    input, textarea {
      font-family: sans-serif;
    }

    p {
      margin: 0;
    }

    *:focus {
      outline: none;
    }

    *:before, *:after {
      box-sizing: border-box;
    }
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles}/>
      <Router/>
    </>
  );
}

export default App;
