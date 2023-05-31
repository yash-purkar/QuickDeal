import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-left'>
          <p className='sale-on'>summer sale is on</p>
          <h3 className='header-title'>make your fashion more perfect</h3>
          <p className='header-desc letter-spacing'>
            Shop the latest trends, elevate your style with our intuitive clothing web app.</p>
          <NavLink to='/productlisting' className='exploreMore-link'>Explore More</NavLink>
          <div className='toggle-div'>

            <div className='circle'></div>
            <img src="https://i.ibb.co/3shx3ZX/head-img-3.png" alt="header" className='img' />
          </div>
        </div>

      </div>

    </div>
  )
}
