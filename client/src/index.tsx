import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HostContextProvider,  SocketsProvider} from "./contexts/useHost";
ReactDOM.render(
  <React.StrictMode>
    <HostContextProvider>
        <SocketsProvider>
      <App />
        </SocketsProvider>
    </HostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
