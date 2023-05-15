import React from 'react'
import './Header.css'
import headerImg from './Images/head-img-3.png'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-left'>
          <p className='sale-on'>summer sale is on</p>
          <h3 className='header-title'>make your fashion more perfect</h3>
          <p className='header-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quas sunt nam quaerat.</p>
          <NavLink to='/productlisting' className='exploreMore-link'>Explore More</NavLink>
          <div className='toggle-div'>

            <div className='circle'></div>
            <img src={headerImg} alt="header" className='img' />
          </div>
        </div>

      </div>

    </div>
  )
}
