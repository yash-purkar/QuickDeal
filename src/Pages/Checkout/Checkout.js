import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { OrderState } from '../../Contexts/Order/OrderContext';
import { DataState } from '../../Contexts/Data/DataContext';
import { AddressState } from '../../Contexts/Address/AddressContext';
import { warning } from '../../Services/Toasts/ToastServices';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../Services/Cart/CartServices';

export const Checkout = () => {
  const { state: { cart }, dispatch } = DataState();
  const { orderState: { price, discount, couponDiscount, totalAmount }, orderDispatch } = OrderState();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const navigate = useNavigate();

  const { addressState: { addresses } } = AddressState()
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const { name, street, cityName, state, country, postalCode, mobileNumber } = addresses.length > 0 && selectedAddress;

  const token = localStorage.getItem("encodedToken");

  const cartItemsId = cart?.reduce((acc, curr) => [...acc, curr._id], [])

  const handlePlaceOrder = () => {
    if (addresses?.length > 0) {
      var options = {
        key: "rzp_test_eIfzqLCuOyYMmK",
        key_secret: "key_secret",
        amount: totalAmount * 100,
        currency: "INR",
        name: "QuickDeal",
        description: "For testing purpose",
        handler: function (response) {
          localStorage.setItem("payment_id", response.razorpay_payment_id);

          setIsOrderPlaced(true);

          cartItemsId.forEach(id => {
            removeFromCart(id, dispatch, token)
          });

          setTimeout(() => {
            navigate("/orderSummary")
          }, 2000);

          orderDispatch({ type: "ORDERED_ITEMS", payload: cart })
          orderDispatch({ type: "SET_SELECTED_ADDR", payload: selectedAddress })

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

    else {
      warning("Add the Address First");
      setTimeout(() => {
        navigate("/profile")
      }, 2000)
    }



  }

  useEffect(() => {
    if (cart?.length === 0) {
      navigate("/productlisting")
    }
  }, [])
  return (
    <>
      {
        isOrderPlaced ? <div>

          <div className='truck-gif-box  '>
            <img src="https://cdn.dribbble.com/users/2140642/screenshots/4281297/rf_sucess_v3.gif" alt="gif" className='truck-gif top-margin-5 margin-bottom-1' />
          </div>
          <h1 className='text-center letter-spacing margin-bottom-1 order-succesfully'>Order Placed Successfully</h1>
          <p className='letter-spacing text-center order-will-deliever'>Your order will be delievered in 3 working days</p>

        </div>
          :
          <div className='checkout-main-container flex justify-around  wrap'>
            {/* addr */}
            <div className='checkout-addresses '>
              <>
                {
                  addresses.length > 0 ?
                    <>{addresses?.map((addr) => {
                      const { id, name, street, cityName, state, country, postalCode, mobileNumber } = addr
                      return (
                        <div key={id} className='single-checkout-address cursor-pointer' onClick={() => setSelectedAddress(addr)}>
                          <label htmlFor="" className='checkout-addr-name'>
                            <input type="radio" name='address' checked={selectedAddress.id === id} />
                            <span className='left-padding-sm'>{name}</span>
                          </label>
                          <div className='left-padding-sm'>
                            <p>{street}, {cityName}, {state}, {postalCode}</p>
                            <p>{country}</p>
                            <p>Mobile Number: {mobileNumber}</p>
                          </div>
                        </div>
                      )
                    })}</>
                    : <h1 className='select-address-heading letter-spacing'>Add The Address First</h1>}

              </>
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
                  cart?.map(prod => <div key={prod._id} className="flex justify-between">
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

                <div className='flex justify-between top-margin font-bold checkout-total letter-spacing'>
                  <p>Total Amount</p>
                  <p>₹ {totalAmount}</p>
                </div>
              </div>

              {/*  */}

              <h3 className='text-uppercase border-top-1  margin-bottom-1 padding-1 font-1 padding-left-0 text-center bottom-border-1 color-primary letter-spacing'>deliver to</h3>

              {addresses?.length > 0 && <div className='delivery-address margin-bottom-1 font-sm'>
                <p className='font-1 address-name font-bold'>{name}</p>
                <p>{street}, {cityName}, {state}, - {postalCode}</p>
                <p>{country}</p>
                <p>Mobile Number :{mobileNumber}</p>
              </div>}



              <button className='place-order-btn cursor-pointer' onClick={handlePlaceOrder}>Place Order</button>

            </div>
          </div>
      }
    </>
  )
}
