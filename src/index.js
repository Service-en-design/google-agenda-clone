import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/tailwind.css";
import App from "./App";
import ContextWrapper from "./contexts/ContextWrapper";


ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);