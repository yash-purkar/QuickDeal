import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext'


export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu");
  const { state: { cart, wishlist }, dispatch } = DataState()

  const navigate = useNavigate();


  const token = localStorage.getItem("encodedToken");

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  const handleSearchProduct = (e) => {
    navigate("/productlisting");
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
  }



  return (
    <>
      <nav className='navigation flex justify-between align-center'>
        <div className='navigation-header flex '>
          <NavLink className="header-link flex align-center" to="/" > <span><img src="https://i.ibb.co/f4VvsJx/logo.png" alt="icon" className='brand-icon' /></span> <span>QuickDeal</span></NavLink>
        </div>


        <div className='search-box'>
          <input type="search" list="search-products" className='search-bar' placeholder='Search Product' onChange={handleSearchProduct} />
          <span></span>
        </div>

        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className={menuClass}>


          <li className='menu-item'>
            <NavLink className="nav-link" to="/productlisting"><MdOutlineLocalMall /></NavLink>
          </li>
          <li className='menu-item wishlist-icon-li'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart />{wishlist?.length > 0 && token && <span className='wishlist-counter'>{wishlist?.length}</span>}</NavLink></li>
          <li className='menu-item cart-icon-li'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart />{cart?.length > 0 && token && <span className='cart-counter'>{cart?.length}</span>}</NavLink></li>
          <li className='menu-item'><NavLink to="/profile" className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

        <ul className='menus-md' >

          <li className='menu-item'><NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item wishlist-icon-li'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart />{wishlist?.length > 0 && token && <span className='wishlist-counter'>{wishlist?.length}</span>}</NavLink></li>
          <li className='menu-item cart-icon-li'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart />{cart?.length > 0 && token && <span className='cart-counter'>{cart?.length}</span>}</NavLink></li>
          <li className='menu-item'><NavLink to="/profile" className="nav-link"><AiOutlineUser /></NavLink></li>

        </ul>

      </nav>
      <div className='search-box-mobile'>
        <input type="search" list="search-products" className='search-bar' placeholder='Search Product' onChange={handleSearchProduct} />
        <span></span>
      </div>
    </>
  )
}
