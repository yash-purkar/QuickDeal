import React, { useState } from 'react'
import { RiCoupon3Fill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'

import { CouponBox } from '../CouponBox/CouponBox'

import './PriceDetails.css'
import { OrderState } from '../../../../Contexts/Order/OrderContext'

export const PriceDetails = ({ cartData, }) => {
  const [isHideCouponBox, setIsHideCouponBox] = useState(true);



  const { couponInfo, setCouponInfo } = OrderState();

  // console.log(couponDetails)

  const newPrice = cartData?.reduce((acc, curr) => curr.newPrice * curr.qty + acc, 0);
  const oldPrice = cartData?.reduce((acc, curr) => curr.oldPrice * curr.qty + acc, 0);

  const couponDisccount = (newPrice * couponInfo.value) / 100;


  const clearCoupon = () => {
    setCouponInfo({ name: "", value: "" })
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
          <p className='sm-fontsize sm-margin-bottom'>-₹ {couponDisccount.toFixed()}</p>
        </div>
        {

          couponInfo.name && <div className='flex justify-between'>
            <p className='sm-fontsize coupon-name font-bold'>
              <RiCoupon3Fill />{couponInfo.name}
            </p>

            <p className='clear-coupon cursor-pointer' onClick={clearCoupon}>
              <ImCross />
            </p>
          </div>

        }
        <div className='flex justify-between total-amt top-margin border-top-1 top-padding-08'>
          <h5 className='sm-fontsize sm-margin-bottom '>Total Amount</h5>
          <h5 className='sm-fontsize sm-margin-bottom'>₹ {(newPrice - couponDisccount).toFixed()}</h5>
        </div>

        <div className='flex justify-between coupon-box '>
          <p className='sm-fontsize sm-margin-bottom coupon-text'><RiCoupon3Fill />Have a Coupon ?</p>
          <button className='apply-coupon-btn' onClick={() => setIsHideCouponBox(false)}>Apply</button>
        </div>

      </div>

      <p className='sm-fontsize sm-margin-bottom saved-price-info'>You will save ₹ {(couponDisccount + oldPrice - newPrice).toFixed()} on this order</p>
      <button className='checkout-btn'>Checkout</button>



      {!isHideCouponBox && <CouponBox setIsHideCouponBox={setIsHideCouponBox} />}
    </div>
  )
}
