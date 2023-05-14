import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'

export const Navbar = () => {
  const [display, setDisplay] = useState("none")

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "none" : "flex";
    setDisplay(updatedDisplay)
  }
  // TODO: Install mockBee 
  return (
    <>
      <nav className='navigation'>
        <h1 className='navigation-header'>QuickDeal</h1>

        {
          display === "none" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

        <ul className='menus' style={{ display }}>
          <li className='menu-item'><AiOutlineSearch /></li>
          <li className='menu-item'><MdOutlineLocalMall /></li>
          <li className='menu-item'><AiOutlineShoppingCart /></li>
          <li className='menu-item'><AiOutlineHeart /></li>
          <li className='menu-item'><AiOutlineUser /></li>
        </ul>

        <ul className='menus-md' >
          <li className='menu-item'><AiOutlineSearch /></li>
          <li className='menu-item'><MdOutlineLocalMall /></li>
          <li className='menu-item'><AiOutlineShoppingCart /></li>
          <li className='menu-item'><AiOutlineHeart /></li>
          <li className='menu-item'><AiOutlineUser /></li>
        </ul>

      </nav>
    </>
  )
}
