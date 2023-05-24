import React from 'react'
import { AuthState } from '../Contexts/Auth/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = AuthState()
  const location = useLocation();
  return (
    <>
      {
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
      }
    </>
  )
}
