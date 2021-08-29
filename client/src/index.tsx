import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SocketsProvider from "./contexts/useHost";
ReactDOM.render(
  <React.StrictMode>
        <SocketsProvider>
      <App />
        </SocketsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
