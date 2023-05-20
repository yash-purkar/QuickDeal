import React, { useState } from 'react'
import './Login.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthState } from '../../Contexts/Auth/AuthContext'


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleSumbit = (e) => {
    e.preventDefault()
  }

  const { setIsLoggedIn } = AuthState()

  const location = useLocation();
  const navigate = useNavigate();

  // *****
  const handleLogin = async () => {
    const prevLocation = location?.state?.from?.pathname;
    if (email && password) {
      try {
        const response = await fetch('/api/auth/login', {
          method: "POST",
          body: JSON.stringify({ email, password })
        })

        console.log(response)
        const { status, data } = await response.json();
        if (status === 200) {

          const { encodedToken, foundUser } = data;
          // localStorage.clear()
          // console.log(localStorage)
          localStorage.setItem("encodedToken", encodedToken);
          localStorage.setItem("user", JSON.stringify(foundUser))

          // const token = localStorage.getItem("user")
          setIsLoggedIn(true)
          navigate(prevLocation)
          console.log("erererer")
        }
      }
      catch (e) {
        console.log("errrr")
        alert("User Not Found")
      }
    }
    else {

      alert("Plz fill the details first")
    }
  }



  // *****




  const handleGuestLogin = async () => {

    const prevLocation = location?.state?.from?.pathname;
    const creds = {
      email: "adarshbalak@gmail.com",
      password: "adarsh_1234",
    }
    setEmail(creds.email)
    setPassword(creds.password)
    try {
      const response = await fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify(creds)
      })
      const data = await response.json();

      const { foundUser, encodedToken } = data;
      localStorage.setItem("encodedToken", encodedToken)
      localStorage.setItem("user", JSON.stringify(foundUser))

      const token = localStorage.getItem("encodedToken")
      if (token) {
        setIsLoggedIn(true)
      }

      navigate(prevLocation)

    }

    catch (e) {
      console.error(e)
    }
  }


  return (
    <div className='login-form-container'>
      <h2 className='text-center top-margin margin-bottom-1 color-primary'>Sign In</h2>
      <form action="" onSubmit={handleSumbit}>
        <div>

          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="email" className='display-inline-block bottom-margin-md top-margin'>Email</label>
            <input type="email" name="email" id="email" className='login-email' placeholder='test@gmail.com' autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className='flex direction-column margin-bottom-1'>
            <label htmlFor="password" className='display-inline-block bottom-margin-md'>Password</label>
            <input type="password" name="password" id="password" className='login-password bottom-margin-md' placeholder='***********' autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
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
