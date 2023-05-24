import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './SignUp.css'
import { AuthState } from '../../Contexts/Auth/AuthContext'
import { BiShow, BiHide } from 'react-icons/bi'
export const SignUp = () => {
  const { setIsLoggedIn } = AuthState();
  const [user, setUser] = useState({
    _id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const { firstName, lastName, email, password } = user;

  const signUpHandler = async () => {
    if (firstName && lastName && email && password) {
      try {
        const response = await fetch('/api/auth/signup', {
          method: "POST",
          body: JSON.stringify(user)
        });
        const data = await response.json();
        const { createdUser, encodedToken } = data;

        if (response.status === 201) {
          localStorage.clear();
          localStorage.setItem("encodedToken", encodedToken);
          localStorage.setItem("user", JSON.stringify(createdUser))
          setIsLoggedIn(true)
          navigate("/productlisting")
        }
        else {
          alert(`${response.status}, ${response.statusText}`)
        }

      } catch (e) {
        console.log(e)
      }
    }
  }


  return (
    <div className='login-form-container  signup-form-container'>
      <h2 className='text-center top-margin margin-bottom-1 color-primary'>Sign Up</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className='fname-lname-box flex justify-between '>

            <label htmlFor="" className='flex direction-column'>
              <span className='bottom-margin-md'>First Name</span>
              <input type="text" placeholder='John' className='fname' onChange={(e) => setUser(prev => ({ ...prev, firstName: e.target.value }))} value={firstName} required />
            </label>

            <label htmlFor="" className='flex direction-column'>
              <span className='bottom-margin-md'>Last Name</span>
              <input type="text" placeholder='Doe' className='lname' onChange={(e) => setUser(prev => ({ ...prev, lastName: e.target.value }))} value={lastName} required />
            </label>
          </div>

          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="email" className='display-inline-block bottom-margin-md top-margin'>Email</label>
            <input type="email" name="email" id="email" className='login-email' placeholder='test@gmail.com' autoComplete='off' onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))} value={email} required />
          </div>

          <div className='flex direction-column margin-bottom-1 relative'>
            <label htmlFor="password" className='display-inline-block bottom-margin-md'>Password</label>
            <input type={showPassword ? "text" : "password"} name="password" id="password" className='login-password bottom-margin-md' placeholder='***********' autoComplete='off' onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))} value={password} required />
            {
              password?.length > 0 && <p className='hide-icon cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <BiShow /> : <BiHide />}</p>
            }
          </div>
          {/* <div className='login-btn-box'> */}

          <button className='login-btn new-acc-btn width-100 bottom-margin-md' onClick={signUpHandler}>Create New Account</button>

          {/* </div> */}

          <p className='dont-have-acc font-sm text-center'>
            Already have an account?<NavLink to="/login" className=" login-link sign-up-link font-bold">sign in</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
