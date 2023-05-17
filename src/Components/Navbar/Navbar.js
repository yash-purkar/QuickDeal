import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu");
  const [searchBar, setSearchBar] = useState(false);

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  const handleToggleSearhBar = () => { }

  return (
    <>
      <nav className='navigation flex justify-between align-center'>
        <h1 className='navigation-header'><NavLink className="header-link" to="/" >QuickDeal</NavLink></h1>


        {
          searchBar && <div>
            <input type="text" className='search-bar' placeholder='Search Product' />
            <span></span>
          </div>
        }


        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className={menuClass}>
          <li className='menu-item'><NavLink onClick={() => setSearchBar(prev => !prev)} className="nav-link">{searchBar ? <RxCross1 /> : <AiOutlineSearch />}</NavLink></li>

          <li className='menu-item'>
            <NavLink className="nav-link" to="/productlisting"><MdOutlineLocalMall /></NavLink>
          </li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

        <ul className='menus-md' >
          <li className='menu-item'><NavLink onClick={() => setSearchBar(prev => !prev)} className="nav-link">{searchBar ? <RxCross1 /> : <AiOutlineSearch />}</NavLink></li>
          <li className='menu-item'><NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

      </nav>
    </>
  )
}
