import React from 'react'
import './Header.css'
import headerImg from './head-img-3.png'
export const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-left'>
          <p className='sale-on'>summer sale is on</p>
          <div className='header-title-box'>
            <h3 className='header-title'>make your fashion more perfect</h3>
            <h3 className='shop-now'>Shop Now</h3>
          </div>
          <p className='header-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quas sunt nam quaerat.</p>
          <a href='/' className='exploreMore-link'>Explore More</a>
          <div className='toggle-div'>

            <div className='circle'></div>
            <img src={headerImg} alt="header" className='img' />
          </div>
        </div>

      </div>

    </div>
  )
}
