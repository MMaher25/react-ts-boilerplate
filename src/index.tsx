import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './app';
import "./Styles/styles.css";

const mountNode = document.getElementById("app");

ReactDOM.render(<App name="Butt" />, mountNode);
