import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';


// Determine which chains the DAO can connect to, currently set to 
// [4] Rinkeby test net
const supportedChainIds = [4];

// Determines what type of wallet can be used (inject, mobile, hardware)
const connectors = {
  injected: {},
};

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds} 
    >
        <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
