import * as React from 'react';
import * as ReactDOM from "react-dom";
import { StoreProvider } from './Store/Store'

import App from './App';
import './Styles/Styles.css';

const mountNode = document.getElementById("app");

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , mountNode);
