import React, { useState } from 'react'
import { AuthState } from '../../Contexts/Auth/AuthContext'
import './Profile.css';

export const Profile = () => {
  const [active, setActive] = useState("profile")

  const { setIsLoggedIn } = AuthState();
  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogOut = () => {
    setIsLoggedIn(false)
    localStorage.clear()
  }

  const { firstName, lastName, email } = user;
  return (
    <div className='profile-container flex direction-column'>


      <div className='profile-nav'>
        <button className={`profile-tab-btn letter-spacing font-1-3 cursor-pointer ${active === "profile" && "active-tab"}`} onClick={() => setActive("profile")}>Profile</button>
        <button className={`profile-tab-btn letter-spacing font-1-3 cursor-pointer ${active === "address" && "active-tab"}`} onClick={() => setActive("address")}>Address</button>
      </div>


      <div className='profile-card flex direction-column '>
        <h2 className='profile-head margin-bottom-1'>{active === "profile" ? "Profile Details" : "My Addresses"}</h2>
        {
          active === "profile" ? <>
            <div className='flex bottom-margin-md'>
              <p className='profile-label'>Name</p>
              <p className='user-name'>{firstName} {lastName}</p>
            </div>
            <div className='flex margin-bottom-1'>
              <p className='email-label'>Email</p>
              <p className='user-email'>{email}</p>
            </div>
            <button className='logout-btn cursor-pointer' onClick={handleLogOut}>Logout</button>
          </>

            :

            <>
              <h4 className=' underline margin-bottom-1 cursor-pointer'>Add New Address+</h4>
              <div className='margin-bottom-1 bottom-border-1'>
                <p className='profile-label address-user-name letter-spacing'>Adarsh Balak</p>
                <p className='font-sm'>#1/4 , 100ft Ring Road, Karve Nagar, Bangalore,Maharashtra . 452412
                  India.Phone Number : 123456789</p>

                <div>
                  <button className='address-edit letter-spacing cursor-pointer'>Edit</button>
                  <button className='address-remove letter-spacing cursor-pointer'>Remove</button>
                </div>
              </div>


            </>
        }
      </div>

    </div>

  )
}
