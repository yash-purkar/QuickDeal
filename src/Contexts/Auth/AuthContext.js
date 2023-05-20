import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
// import { authInitialState, authReducer } from "../../Reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("encodedToken");


  const [isLoggedIn, setIsLoggedIn] = useState(token)

  // const isUserLogged = () => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }
  // useEffect(() => {
  //   isUserLogged()
  // }, [])
  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
}

export const AuthState = () => useContext(AuthContext);

