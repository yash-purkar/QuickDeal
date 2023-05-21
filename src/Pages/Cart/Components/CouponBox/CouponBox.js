import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import './CouponBox.css'
export const CouponBox = ({ hideCouponBox, setHideCouponBox, handleCouponApply, selectedCoupon, setSelectedCoupon }) => {



  return (
    <>
      {!hideCouponBox && <div className='main-coupon-container flex justify-center align-center' >
        <div className='coupon-container flex direction-column justify-between '>
          <div className='coupon-box-head flex justify-between margin-bottom-1'>
            <h3>Apply Coupon</h3>
            <span className='cross-icon cursor-pointer' onClick={() => setHideCouponBox(true)}><ImCross /></span>
          </div>
          <label htmlFor="coupon50" className='discount-type font-md flex align-center font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setSelectedCoupon(50)} value={50} checked={selectedCoupon === 50} />
            50% OFF:DIWALI_DHAMAKA
          </label>
          <label htmlFor="coupon10" className='discount-type font-md flex align-center margin-bottom-1 font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setSelectedCoupon(10)} value={10} checked={selectedCoupon === 10} />
            10% OFF:NEW_USER
          </label>

          <button className='apply-btn cursor-pointer' onClick={() => handleCouponApply()}>Apply</button>
        </div>

      </div>}
    </>
  )
}
