import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App";
import './index.css'

import { makeServer } from "./server";
import { DataContextProvider } from "./Contexts/DataContext/DataContext";
import { AuthContextProvider } from "./Contexts/AuthContext/AuthContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);