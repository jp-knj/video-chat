import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HostContextProvider } from "./contexts/useHost";
ReactDOM.render(
  <React.StrictMode>
    <HostContextProvider>
      <App />
    </HostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
