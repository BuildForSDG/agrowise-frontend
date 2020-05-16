import ReactDOM from "react-dom";
import React from "react";
import App from './app';
import "./index.css";

const startApp = () => {
  const header = document.getElementById('app');
  if (!header) return;

  ReactDOM.render(<App />, header);
};

document.addEventListener('DOMContentLoaded', startApp);
