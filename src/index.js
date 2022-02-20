import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./components/stylesheets/index.css";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
