import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext'
import { AuthState } from '../../Contexts/Auth/AuthContext'


export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu");

  const navigate = useNavigate();

  const location = useLocation();

  const { state: { products }, dispatch } = DataState()
  const { isLoggedIn, setIsLoggedIn } = AuthState();

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  const handleSearchProduct = (e) => {
    navigate("/productlisting");
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
  }

  const handleLoggedIn = () => {
    setIsLoggedIn(prev => !prev);
    const prevPage = location?.state?.from?.pathname;
    console.log(prevPage)
    navigate(prevPage)
  }

  const allProductNames = products.reduce((acc, curr) => acc.includes(curr.itemName) ? acc : [...acc, curr.itemName], [])

  return (
    <>
      <nav className='navigation flex justify-between align-center'>
        <h1 className='navigation-header'><NavLink className="header-link" to="/" >QuickDeal</NavLink></h1>

        <div>
          <input type="search" list="search-products" className='search-bar' placeholder='Search Product' onChange={handleSearchProduct} />
          <span></span>
        </div>

        <datalist id='search-products' >
          {
            allProductNames.map(name => <option key={name}>{name}</option>)
          }
        </datalist>

        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className={menuClass}>


          <li className='menu-item'>
            <NavLink className="nav-link" to="/productlisting"><MdOutlineLocalMall /></NavLink>
          </li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/login" className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

        <ul className='menus-md' >

          <li className='menu-item'><NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/login" className="nav-link"><AiOutlineUser /></NavLink></li>
          <li><button onClick={handleLoggedIn}>{isLoggedIn ? "Log Out" : "Log In"}</button></li>
        </ul>

      </nav>
    </>
  )
}
