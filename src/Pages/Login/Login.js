import React, { useState } from 'react'
import './Login.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthState } from '../../Contexts/Auth/AuthContext'
import { BiShow, BiHide } from 'react-icons/bi'
import { DataState } from '../../Contexts/Data/DataContext'
import { warning } from '../../Services/Toasts/ToastServices'
import { loginAsGuest, loginUser } from '../../Services/Auth/AuthService'


export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleSumbit = (e) => {
    e.preventDefault()
  }

  const { dispatch } = DataState()
  const { setIsLoggedIn } = AuthState()

  const location = useLocation();
  const navigate = useNavigate();

  // It handles login and pass details and setter functions to set loggin state
  const handleLogin = async () => {
    const prevLocation = location?.state?.from?.pathname;
    if (email && password) {
      loginUser(email, password, dispatch, setIsLoggedIn, navigate, prevLocation)
    }
    else {
      warning("Plz fill the details first")
    }
  }

  // It handles guest login
  const handleGuestLogin = async () => {

    const prevLocation = location?.state?.from?.pathname;
    const creds = {
      email: "yashpurkar@gmail.com",
      password: "yash_1234",
    }
    setEmail(creds.email)
    setPassword(creds.password)
    loginAsGuest(creds, dispatch, setIsLoggedIn, navigate, prevLocation);

  }

  return (
    <div className='login-form-container'>
      <h2 className='text-center top-margin margin-bottom-1 color-primary'>Sign In</h2>
      <form action="" onSubmit={handleSumbit}>
        <div>

          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="email" className='display-inline-block bottom-margin-md top-margin'>Email</label>
            <input type="text" name="email" id="email" className='login-email' placeholder='test@gmail.com' autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className='flex direction-column margin-bottom-1 relative'>
            <label htmlFor="password" className='display-inline-block bottom-margin-md'>Password</label>
            <input type={showPassword ? "text" : "password"} name="password" id="password" className='login-password bottom-margin-md' placeholder='***********' autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} />
            {
              password.length > 0 && <p className='hide-icon cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>{showPassword ? <BiShow /> : <BiHide />}</p>
            }
          </div>

          <small style={{ display: "inline-block", marginBottom: "1rem", color:"red" }}>
            We are not using actual database, your details might not be saved.
            Thanks for understanding.
          </small>

          <div className='login-btn-box'>
            <button className='login-btn width-100 bottom-margin-md' onClick={handleLogin}>Login</button>

            <button type='submit' onClick={handleGuestLogin} className='login-as-guest width-100 bottom-margin-md'>Login As a Guest</button>
          </div>

          <p className='dont-have-acc font-sm text-center'>
            Don't have an account? <NavLink className="sign-up-link font-bold" to="/signup">sign up</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
