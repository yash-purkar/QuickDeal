import React from 'react'
import { RiCoupon2Fill } from 'react-icons/ri'
import './PriceDetails.css'

export const PriceDetails = ({ cartData }) => {
  const totalItemsPrice = cartData.reduce((acc, curr) => curr.newPrice + acc, 0);
  return (
    <div className='price-detail-card'>
      <h4 className='price-detail-heading'>Price Details</h4>

      <div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom '>Price ({cartData.length})</p>
          <p className='sm-fontsize'>₹ {totalItemsPrice}</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>₹ -900</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Cuopon Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>₹ 0.00</p>
        </div>

        <div className='displayFlex total-amt'>
          <h5 className='sm-fontsize sm-margin-bottom'>Total Amount</h5>
          <h5 className='sm-fontsize sm-margin-bottom'>₹ 1598</h5>
        </div>

        <div className='displayFlex coupon-box'>
          <p className='sm-fontsize sm-margin-bottom coupon-text'><RiCoupon2Fill />Have a Coupon ?</p>
          <button className='apply-coupon-btn'>Apply</button>
        </div>

      </div>

      <p className='sm-fontsize sm-margin-bottom saved-price-info'>You will save ₹ 958 on this order</p>
      <button className='checkout-btn'>Checkout</button>
    </div>
  )
}
