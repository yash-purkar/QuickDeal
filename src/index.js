import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { makeServer } from "./server";
import { CartContextProvider } from "./Contexts/CartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);