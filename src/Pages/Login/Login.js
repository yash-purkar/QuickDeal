import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'


export const Login = () => {

  return (
    <div className='login-form-container'>
      <h2 className='text-center top-margin margin-bottom-1 color-primary'>Sign In</h2>
      <form action="">
        <div>

          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="email" className='display-inline-block bottom-margin-md top-margin'>Email</label>
            <input type="email" name="email" id="email" className='login-email' placeholder='test@gmail.com' autoComplete='off' />
          </div>
          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="password" className='display-inline-block bottom-margin-md'>Password</label>
            <input type="password" name="password" id="password" className='login-password bottom-margin-md' placeholder='***********' autoComplete='off' />
          </div>
          <div className='login-btn-box'>
            <button className='login-btn width-100 bottom-margin-md'>Login</button>
            <button className='login-as-guest width-100 bottom-margin-md'>Login As a Guest</button>
          </div>

          <p className='dont-have-acc font-sm text-center'>
            Don't have an account? <NavLink className="sign-up-link">Sign Up</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
