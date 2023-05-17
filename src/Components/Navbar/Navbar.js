import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const getActiveStyle = ({ isActive }) => ({ borderBottom: "1px solid var(--primary)" })

export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu")

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  return (
    <>
      <nav className='navigation'>
        <h1 className='navigation-header'><NavLink className="header-link" to="/" >QuickDeal</NavLink></h1>

        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className={menuClass}>
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineSearch /></NavLink></li>

          <li className='menu-item'>
            <NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink>
          </li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

        <ul className='menus-md' >
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineSearch /></NavLink></li>
          <li className='menu-item'><NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

      </nav>
    </>
  )
}
