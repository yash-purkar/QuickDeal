import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu")

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  return (
    <>
      <nav className='navigation'>
        <h1 className='navigation-header'><NavLink to="/" className="navbar-link">QuickDeal</NavLink></h1>

        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className={menuClass}>
          <li className='menu-item'><AiOutlineSearch /></li>
          <li className='menu-item'><NavLink to="/productlisting" className="navbar-link"><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><AiOutlineShoppingCart /></li>
          <li className='menu-item'><AiOutlineHeart /></li>
          <li className='menu-item'><AiOutlineUser /></li>
        </ul>

        <ul className='menus-md' >
          <li className='menu-item'><AiOutlineSearch /></li>
          <li className='menu-item'><NavLink to="/productlisting" className="navbar-link"><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><AiOutlineShoppingCart /></li>
          <li className='menu-item'><AiOutlineHeart /></li>
          <li className='menu-item'><AiOutlineUser /></li>
        </ul>

      </nav>
    </>
  )
}
