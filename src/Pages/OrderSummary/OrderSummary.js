import React from 'react'
import './OrderSummary.css'

export const OrderSummary = () => {
  return (
    <>
      <h1 className='text-center letter-spacing color-primary order-summary-heading'>Order Summary</h1>
      <div className='order-summary-main flex justify-center'>
        <div className='order-summary-container flex direction-column'>
          <div>
            <p className='order-confirmed-msg font-1-2 font-bold letter-spacing bottom-margin-md'>Order Confirmed</p>
            <div className='font-09 bottom-margin-md order-detail '>
              <p><span className='font-bold'>Payment ID:</span> pay_Lv7NEug98d7Sb9</p>
              <p><span className='font-bold'>Total Amount:</span> ₹ 250.00</p>
              <p><span className='font-bold'>Order will be delivered to :</span></p>
            </div>
            <div className='font- font-md delivery-address margin-bottom-11'>
              <p className='font-1 address-name font-bold'>Yash Purkar</p>
              <p className='summary-addr font-09'>#1/4 , 100ft Ring Road, Karve Nagar,</p>
              <p className='summary-addr font-09'>Bangalore </p>
              <p className='summary-addr font-09'>India. 452412</p>
              <p className='summary-addr font-09'>Mobile Number : 123456789</p>
            </div>
          </div>

          <div className='bottom-margin-md ordered-items'>

            <div className="cart-product-card prod">
              <div className="cart-product-details prod-detail">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?size=626&ext=jpg&ga=GA1.1.1963083236.1682951392&semt=sph" alt="p" className="cart-product-img cursor-pointer" />
                <div className="product-info">
                  <h4 className='cart-item-name prod-name'>Believe In Yourself</h4>
                  <p>Quantity : 5</p>
                  <div className="cart-product-prices">
                    <span className='new-price get-fontsize font-1-rem'>₹{719}</span>
                    <span className='old-price font-1-rem'>₹{1199}</span>
                  </div>
                  <span className='discount get-fontsize'>(50%OFF)</span>
                </div>
              </div>
            </div>



            <div className="cart-product-card prod">
              <div className="cart-product-details prod-detail">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?size=626&ext=jpg&ga=GA1.1.1963083236.1682951392&semt=sph" alt="p" className="cart-product-img cursor-pointer" />
                <div className="product-info">
                  <h4 className='cart-item-name prod-name'>Believe In Yourself</h4>
                  <p>Quantity : 5</p>
                  <div className="cart-product-prices">
                    <span className='new-price get-fontsize font-1-rem'>₹{719}</span>
                    <span className='old-price font-1-rem'>₹{1199}</span>
                  </div>
                  <span className='discount get-fontsize'>(50%OFF)</span>
                </div>
              </div>

            </div>


          </div>


        </div>

      </div>
    </>
  )
}
