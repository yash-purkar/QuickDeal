import React from 'react'
import { NavLink } from 'react-router-dom'
import pageNotFound from '../../assets/404.svg'

export const ErrorPage = () => {
  return (
    <div className='flex direction-column align-center top-margin-5'>
      <img src={pageNotFound} alt="404" className='illustrations' />
      <h2 className='color-primary letter-spacing'>Page Not Found: <NavLink to="/" className="underline font-1-2">Go To Home</NavLink></h2>
    </div>
  )
}
