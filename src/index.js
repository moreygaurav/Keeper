import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./Style.css"
import hashrouter from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <hashrouter>
    <App />
  </hashrouter>
);
