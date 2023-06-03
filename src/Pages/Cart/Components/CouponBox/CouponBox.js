import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import './CouponBox.css'
import { OrderState } from '../../../../Contexts/Order/OrderContext';
import { success } from '../../../../Services/Toasts/ToastServices';

export const CouponBox = ({ setIsHideCouponBox, }) => {

  const { couponInfo, setCouponInfo } = OrderState();

  const [couponDetails, setCouponDetails] = useState({
    name: "",
    value: couponInfo.value //for checked of radio inputs
  });

  const handleCancel = () => {
    setIsHideCouponBox(true)
  }

  const handleApplyCoupon = () => {
    if (couponDetails.name) {
      setIsHideCouponBox(true)
      setCouponInfo(couponDetails)
      success("Coupon Applied")
    }
  }

  return (
    <>
      {<div className='main-coupon-container flex justify-center align-center' >
        <div className='coupon-container flex direction-column justify-between '>
          <div className='coupon-box-head flex justify-between margin-bottom-1'>
            <h3>Apply Coupon</h3>
            <span className='cross-icon cursor-pointer' onClick={handleCancel} ><ImCross /></span>
          </div>

          <label htmlFor="coupon10" className='discount-type font-md flex align-center margin-bottom-1 font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setCouponDetails({ name: "FIRST_ORDER", value: 25 })} checked={couponDetails.value === 25} />
            25% OFF:FIRST_ORDER
          </label>
          <label htmlFor="coupon50" className='discount-type font-md flex align-center font-sm'>
            <input type="radio" name="coupon" className='discount-radio' onChange={() => setCouponDetails({ name: "SUMMER_SALE", value: 20 })} checked={couponDetails.value === 20} />
            20% OFF:SUMMER_SALE
          </label>
          <button className='apply-btn cursor-pointer' onClick={() => handleApplyCoupon()}>Apply</button>
        </div>

      </div>}
    </>
  )
}
