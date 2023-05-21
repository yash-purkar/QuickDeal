import React, { useState } from 'react'
import { RiCoupon3Fill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'

import './PriceDetails.css'

export const PriceDetails = ({ cartData, setHideCouponBox, selectedCoupon, couponApplied, couponName, setCouponApplied, setSelectedCoupon }) => {


  const newPrice = cartData?.reduce((acc, curr) => curr.newPrice * curr.qty + acc, 0);
  const oldPrice = cartData?.reduce((acc, curr) => curr.oldPrice * curr.qty + acc, 0);


  let couponAmt = 0;

  const getTotalAmt = () => {
    let totalAmount = newPrice;
    if (couponApplied) {
      totalAmount = newPrice - (newPrice * selectedCoupon / 100)
      couponAmt = (newPrice * selectedCoupon / 100)
      return totalAmount;
    }

    couponAmt = 0;
    return totalAmount;


  }

  const clearCoupon = () => {
    setCouponApplied(false);
    setSelectedCoupon(0)
  }

  return (
    <div className='price-detail-card'>
      <h4 className='price-detail-heading'>Price Details</h4>

      <div>

        <div className='flex justify-between'>
          <p className='sm-fontsize sm-margin-bottom '>Price ({cartData.length})</p>
          <p className='sm-fontsize'>₹ {oldPrice}</p>
        </div>

        <div className='flex justify-between'>
          <p className='sm-fontsize sm-margin-bottom'>Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>-₹ {oldPrice - newPrice}</p>
        </div>

        <div className='flex justify-between'>
          <p className='sm-fontsize sm-margin-bottom'>Cuopon Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>₹ 0.00</p>
        </div>

        {
          couponApplied && <div className='flex justify-between'>
            <p className='sm-fontsize coupon-name font-bold'>
              <RiCoupon3Fill />{couponName}
            </p>

            <p onClick={clearCoupon} className='clear-coupon cursor-pointer'>
              <ImCross />
            </p>
          </div>

        }
        <div className='flex justify-between total-amt top-margin border-top-1 top-padding-08'>
          <h5 className='sm-fontsize sm-margin-bottom '>Total Amount</h5>
          <h5 className='sm-fontsize sm-margin-bottom'>₹ {getTotalAmt()}</h5>
        </div>

        <div className='flex justify-between coupon-box '>
          <p className='sm-fontsize sm-margin-bottom coupon-text'><RiCoupon3Fill />Have a Coupon ?</p>
          <button className='apply-coupon-btn' onClick={() => setHideCouponBox(false)}>Apply</button>
        </div>

      </div>

      <p className='sm-fontsize sm-margin-bottom saved-price-info'>You will save ₹ {Number((oldPrice - newPrice) + couponAmt)} on this order</p>
      <button className='checkout-btn'>Checkout</button>
    </div>
  )
}
