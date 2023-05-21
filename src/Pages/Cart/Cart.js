import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'

export const Cart = () => {
  const { state: { cart } } = DataState()

  console.log(cart, "cart")

  useEffect(() => {
    // getCartData()
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <h2 className='text-center top-margin'>My Cart({cart.length})</h2>
      <div className="cart-main">
        <div className="cart-container">
          {
            cart?.map(product => <SingleCartProduct key={product._id} product={product} />)
          }

        </div>
        <PriceDetails cartData={cart} />
        {/* ** */}
        <div className='main-coupon-container flex justify-center align-center' >



          <div className='coupon-container flex direction-column justify-between '>
            <div className='coupon-box-head flex justify-between margin-bottom-1'>
              <h3>Apply Coupon</h3>
              <span className='cross-icon cursor-pointer'><ImCross /></span>
            </div>
            <label htmlFor="coupon50" className='discount-type font-md flex align-center font-sm'>
              <input type="radio" name="coupon" className='discount-radio' />
              50% OFF:DIWALI_DHAMAKA
            </label>
            <label htmlFor="coupon10" className='discount-type font-md flex align-center margin-bottom-1 font-sm'>
              <input type="radio" name="coupon" className='discount-radio' />
              10% OFF:NEW_USER
            </label>

            <button className='apply-btn cursor-pointer'>Apply</button>
          </div>

        </div>
        {/* ** */}
      </div>
    </>
  )
}
