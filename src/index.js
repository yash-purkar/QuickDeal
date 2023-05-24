import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App";
import './index.css'

import { makeServer } from "./server";
import { DataContextProvider } from "./Contexts/Data/DataContext";
import { AuthContextProvider } from "./Contexts/Auth/AuthContext";
import { OrderContextProvider } from "./Contexts/Order/OrderContext";
import { AddressContextProvider } from "./Contexts/Address/AddressContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <OrderContextProvider>
            <AddressContextProvider>
              <App />
            </AddressContextProvider>
          </OrderContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode >,
  document.getElementById("root")
);