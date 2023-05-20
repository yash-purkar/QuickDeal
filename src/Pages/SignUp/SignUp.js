import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='login-form-container  signup-form-container'>
      <h2 className='text-center top-margin margin-bottom-1 color-primary'>Sign Up</h2>
      <form action="" >
        <div>
          <div className='fname-lname-box flex justify-between '>

            <label htmlFor="" className='flex direction-column'>
              <span className='bottom-margin-md'>First Name</span>
              <input type="text" placeholder='first Name' className='fname' />
            </label>

            <label htmlFor="" className='flex direction-column'>
              <span className='bottom-margin-md'>Last Name</span>
              <input type="text" placeholder='last Name' className='lname' />
            </label>
          </div>

          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="email" className='display-inline-block bottom-margin-md top-margin'>Email</label>
            <input type="email" name="email" id="email" className='login-email' placeholder='test@gmail.com' autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="password" className='display-inline-block bottom-margin-md'>Password</label>
            <input type="password" name="password" id="password" className='login-password bottom-margin-md' placeholder='***********' autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          {/* <div className='login-btn-box'> */}

          <button className='login-btn new-acc-btn width-100 bottom-margin-md' >Create New Account</button>

          {/* </div> */}

          <p className='dont-have-acc font-sm text-center'>
            Already have an account?<NavLink to="/login" className=" login-link sign-up-link font-bold">sign in</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
