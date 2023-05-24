import React, { useState } from 'react'
import './Checkout.css'
import { OrderState } from '../../Contexts/Order/OrderContext';
import { DataState } from '../../Contexts/Data/DataContext';
import { AddressState } from '../../Contexts/Address/AddressContext';

export const Checkout = () => {
  const { state: { cart } } = DataState();
  const { orderState: { price, discount, couponDiscount, totalAmount } } = OrderState();

  const { addressState: { addresses } } = AddressState()
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const { name, street, cityName, state, country, postalCode, mobileNumber } = selectedAddress;

  const handlePlaceOrder = () => {
    var options = {
      key: "rzp_test_eIfzqLCuOyYMmK",
      key_secret: "key_secret",
      amount: totalAmount * 100,
      currency: "INR",
      name: "QuickDeal",
      description: "For testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Yash Purkar",
        email: "yashpurkar7079@gmail.com",
        contact: "9370387079"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "#2874f0"
      }

    }
    var pay = new window.Razorpay(options);
    pay.open();
  }
  return (
    <div className='checkout-main-container flex justify-around align-center wrap'>
      {/* addr */}
      <div className='checkout-addresses'>
        {
          addresses?.map((addr) => {
            const { id, name, street, cityName, state, country, postalCode, mobileNumber } = addr
            return (
              <div key={id} className='single-checkout-address'>
                <label htmlFor="" className='checkout-addr-name'>
                  <input type="radio" name='address' checked={selectedAddress.id === id} onChange={() => setSelectedAddress(addr)} />
                  <span className='left-padding-sm'>{name}</span>
                </label>
                <div className='left-padding-sm'>
                  <p>{street} {cityName} {state} {postalCode}</p>
                  <p>{country}</p>
                  <p>Mobile Number: {mobileNumber}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      {/*  */}

      <div className='checkout-container flex direction-column justify-between'>
        <h3 className='text-uppercase border-top-1  padding-1 font-1 padding-left-0 text-center bottom-border-1 color-primary letter-spacing'>order details</h3>
        <div className='flex justify-between'>
          <p className='font-bold top-padding-08  bottom-margin-md'>Item</p>
          <p className='font-bold top-padding-08  bottom-margin-md '>Qty</p>
        </div>

        {/*  */}
        <div className='padding-bottom-1'>

          {
            cart.map(prod => <div key={prod._id} className="flex justify-between">
              <p>{prod.itemName}</p>
              <p>{prod.qty}</p>
            </div>)
          }

        </div>
        {/*  */}
        <h3 className='text-uppercase border-top-1  margin-bottom-1 padding-1 font-1 padding-left-0 text-center bottom-border-1 color-primary letter-spacing'>price details</h3>

        {/* */}
        <div className='padding-bottom-1 '>

          <div className='flex justify-between'>
            <p>Price({cart.length}) </p>
            <p>₹ {price}</p>
          </div>

          <div className='flex justify-between'>
            <p>Discount</p>
            <p>-₹ {discount}</p>
          </div>

          <div className='flex justify-between'>
            <p>Delievery Charges</p>
            <p className='text-uppercase'>free</p>
          </div>

          <div className='flex justify-between'>
            <p>Coupon Discount</p>
            <p>-₹ {couponDiscount}</p>
          </div>

          <div className='flex justify-between top-margin font-bold'>
            <p>Total Amount</p>
            <p>₹ {totalAmount}</p>
          </div>
        </div>

        {/*  */}

        <h3 className='text-uppercase border-top-1  margin-bottom-1 padding-1 font-1 padding-left-0 text-center bottom-border-1 color-primary letter-spacing'>deliver to</h3>

        <div className='delivery-address margin-bottom-1 font-sm'>
          <p className='font-1 address-name font-bold'>{name}</p>
          <p>{street} {cityName} {state} - {postalCode}</p>
          <p>{country}</p>
          <p>Mobile Number :{mobileNumber}</p>
        </div>



        <button className='place-order-btn cursor-pointer' onClick={handlePlaceOrder}>Place Order</button>

      </div>
    </div>
  )
}
