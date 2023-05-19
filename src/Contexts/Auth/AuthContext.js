import React, { createContext, useContext, useReducer, useState } from "react";
import { authInitialState, authReducer } from "../../Reducers/AuthReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const AuthState = () => useContext(AuthContext);

