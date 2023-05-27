import React, { createContext, useContext, useState } from "react";
// import { authInitialState, authReducer } from "../../Reducers/AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("encodedToken");

  const [isLoggedIn, setIsLoggedIn] = useState(token)

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
}

export const AuthState = () => useContext(AuthContext);

