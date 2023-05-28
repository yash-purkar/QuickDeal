import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='flex direction-column align-center'>

      <h1 className='text-center margin-bottom-1 letter-spacing'>404 Page Not Found</h1>
      <NavLink to="/" className="font-1-3 underline" >Go To Home Page</NavLink>
    </div>
  )
}
