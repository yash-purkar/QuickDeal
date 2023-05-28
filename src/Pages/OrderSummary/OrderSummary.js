import React from 'react'
import './OrderSummary.css'
import { OrderState } from '../../Contexts/Order/OrderContext'

export const OrderSummary = () => {
  const { orderState: { totalAmount, selectedAddr: { name, street, cityName, state, postalCode, country, mobileNumber }, orderedItems } } = OrderState();

  const payment_id = localStorage.getItem("payment_id")
  return (
    <>
      <h1 className='text-center letter-spacing color-primary order-summary-heading'>Order Summary</h1>
      <div className='order-summary-main flex justify-center'>
        <div className='order-summary-container flex direction-column'>
          <div>
            <p className='order-confirmed-msg font-1-2 font-bold letter-spacing bottom-margin-md'>Order Confirmed</p>
            <div className='font-09 bottom-margin-md order-detail '>
              <p><span className='font-bold'>Payment ID:</span> {payment_id}</p>
              <p><span className='font-bold'>Total Amount:</span> ₹ {totalAmount}</p>
              <p><span className='font-bold'>Order will be delivered to :</span></p>
            </div>
            <div className='font- font-md delivery-address margin-bottom-11'>
              <p className='font-1 address-name font-bold'>{name}</p>
              <p className='summary-addr font-09'>{street}</p>
              <p className='summary-addr font-09'>{cityName} {state} - {postalCode}</p>
              <p className='summary-addr font-09'>{country}</p>
              <p className='summary-addr font-09'>Mobile Number : {mobileNumber}</p>
            </div>
          </div>

          <div className='bottom-margin-md ordered-items'>

            {
              orderedItems?.map(prod => {
                const { _id, image, qty, itemName, oldPrice, newPrice, discount } = prod;
                return (
                  <div className="cart-product-card prod" key={_id}>
                    <div className="cart-product-details prod-detail">
                      <img src={image} alt={itemName} className="cart-product-img cursor-pointer" />
                      <div className="product-info">
                        <h4 className='cart-item-name prod-name'>{itemName}</h4>
                        <p>Quantity : {qty}</p>
                        <div className="cart-product-prices">
                          <span className='new-price get-fontsize font-1-rem'>₹{newPrice}</span>
                          <span className='old-price font-1-rem'>₹{oldPrice}</span>
                        </div>
                        <span className='discount get-fontsize'>({discount}%OFF)</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }





          </div>


        </div>

      </div>
    </>
  )
}
