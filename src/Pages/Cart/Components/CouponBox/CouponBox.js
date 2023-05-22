import React from 'react'
import { ImCross } from 'react-icons/im'
import './CouponBox.css'
export const CouponBox = ({ setIsHideCouponBox, setCouponDetails, couponDetails, handleApplyCoupon }) => {


  return (
    <>
      {<div className='main-coupon-container flex justify-center align-center' >
        <div className='coupon-container flex direction-column justify-between '>
          <div className='coupon-box-head flex justify-between margin-bottom-1'>
            <h3>Apply Coupon</h3>
            <span className='cross-icon cursor-pointer' onClick={() => setIsHideCouponBox(true)} ><ImCross /></span>
          </div>
          <label htmlFor="coupon50" className='discount-type font-md flex align-center font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setCouponDetails({ name: "DIWALI_DHAMAKA", value: 50 })} checked={couponDetails.value === 50} />
            50% OFF:DIWALI_DHAMAKA
          </label>
          <label htmlFor="coupon10" className='discount-type font-md flex align-center margin-bottom-1 font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setCouponDetails({ name: "NEW_USER", value: 10 })} checked={couponDetails.value === 10} />
            10% OFF:NEW_USER
          </label>

          <button className='apply-btn cursor-pointer' onClick={() => handleApplyCoupon(true)}>Apply</button>
        </div>

      </div>}
    </>
  )
}
