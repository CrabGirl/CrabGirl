import React from 'react';
import { Global, css } from '@emotion/core';
import Router from './Router';
import bkg from '../assets/images/bkg.jpg';
import eot from '../assets/JI_Chubby_Caps.eot';
import svg from '../assets/JI_Chubby_Caps.svg';
import ttf from '../assets/JI_Chubby_Caps.ttf';
import woff from '../assets/JI_Chubby_Caps.woff';

const globalStyles = css`
  @font-face {
    font-family: 'JI Chubby Caps';
    src:url('./fonts/JI_Chubby_Caps.eot?') format('eot'),
      url('./fonts/JI_Chubby_Caps.woff') format('woff'),
      url('./fonts/JI_Chubby_Caps.ttf') format('truetype'),
      url('./fonts/JI_Chubby_Caps.svg#JIChubbyCaps') format('svg');
  }

  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: auto;
  }

  html, body {
    color: #191C1F;
    background-color: #2C3E50;
    font-family: Gochi Hand, sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    height: 100%;

    a {
      color: #191C1F;
      text-decoration: none;
    }

    #app {
      height: 100%;
      margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
    }

    input, textarea {
      font-family: Gochi Hand, sans-serif;
    }

    p {
      margin: 0;
    }

    .standard-page {
      height: 100%;
      overflow-y: auto;
      background: linear-gradient(135deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(225deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(315deg,#34495E 25%,transparent 25%),linear-gradient(45deg,#34495E 25%,transparent 25%);
      background-size: 100px 100px;
      background-color: #2C3E50;
    }

    .border-box {
      border: 9px solid #191C1F;
      background: url(${bkg});
      background-size: 3px;
    }

    .content-section {
      max-width: 800px;
      width: calc(100% - 64px);
      margin: 0 auto;
      padding: 16px 32px;
    }

    .smaller-content-section {
      max-width: 575px;
      width: calc(100% - 64px);
      margin: 0 auto;
      padding: 16px 32px;
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
