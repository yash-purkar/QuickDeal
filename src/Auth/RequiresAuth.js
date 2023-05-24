import React from 'react'
import { AuthState } from '../Contexts/Auth/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { DataState } from '../Contexts/Data/DataContext';

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = DataState()
  const location = useLocation();
  return (
    <>
      {
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
      }
    </>
  )
}
