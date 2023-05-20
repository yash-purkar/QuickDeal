import React from 'react'
import { AuthState } from '../../Contexts/Auth/AuthContext'
import './Profile.css';

export const Profile = () => {

  const { user, setIsLoggedIn } = AuthState();

  const handleLogOut = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("encodedToken")
    localStorage.removeItem("user")
  }
  console.log(user, "user")
  const { firstName, lastName, email } = user;
  return (
    <div className='profile-card flex direction-column '>
      <h2 className='profile-head margin-bottom-1'>Profile Details</h2>
      <div className='flex bottom-margin-md'>
        <p className='profile-label'>Name</p>
        <p className='user-name'>{firstName} {lastName}</p>
      </div>
      <div className='flex margin-bottom-1'>
        <p className='email-label'>Email</p>
        <p className='user-email'>{email}</p>
      </div>
      <button className='logout-btn cursor-pointer' onClick={handleLogOut}>Logout</button>
    </div>
  )
}
