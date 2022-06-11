import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import MarloProvider from "./components/Context";

import "bootstrap/dist/css/bootstrap.min.css";

// css
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <MarloProvider>
      <App />
    </MarloProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
