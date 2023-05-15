import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App";
import './index.css'

import { makeServer } from "./server";
import { CartContextProvider } from "./Contexts/CartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);