import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
// import { authInitialState, authReducer } from "../../Reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("encodedToken");

  const user = JSON.parse(localStorage.getItem("user"))
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isUserLogged = () => {
    if (token) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }
  useEffect(() => {
    isUserLogged()
  }, [])
  return <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn }}>{children}</AuthContext.Provider>
}

export const AuthState = () => useContext(AuthContext);

