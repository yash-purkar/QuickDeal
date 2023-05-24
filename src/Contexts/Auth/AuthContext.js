import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
// import { authInitialState, authReducer } from "../../Reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {




  return <AuthContext.Provider >{children}</AuthContext.Provider>
}

export const AuthState = () => useContext(AuthContext);

