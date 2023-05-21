import React, { useEffect, useState } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'
import { CouponBox } from './Components/CouponBox/CouponBox'

export const Cart = () => {
  const { state: { cart } } = DataState();
  const [hideCouponBox, setHideCouponBox] = useState(true);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponName, setCouponName] = useState();



  console.log(cart, "cart")

  useEffect(() => {
    // getCartData()
    window.scrollTo(0, 0)
  }, [])

  const handleCouponChange = (e) => {
    setSelectedCoupon(e.target.value)
  }

  const handleCouponApply = () => {
    if (Number(selectedCoupon) === 50) {
      setCouponName("DIWALI_DHAMAKA");
    }
    else {
      setCouponName("NEW USER")
    }
    // setSelectedCoupon(offerValue)
    if (selectedCoupon) {
      setHideCouponBox(true)
      setCouponApplied(true)
    }
  }


  return (
    <>
      <h2 className='text-center top-margin'>{cart.length > 0 ? `My Cart(${cart.length})` : "Cart Is Empty🤪"}</h2>

      <div className="cart-main">
        <div className="cart-container">
          {
            cart?.map(product => <SingleCartProduct key={product._id} product={product} />)
          }

        </div>

        {
          cart.length > 0 && <PriceDetails cartData={cart} setHideCouponBox={setHideCouponBox} selectedCoupon={selectedCoupon} couponApplied={couponApplied} couponName={couponName} setCouponApplied={setCouponApplied} setSelectedCoupon={setSelectedCoupon} />

        }


        <CouponBox hideCouponBox={hideCouponBox} setHideCouponBox={setHideCouponBox} handleCouponChange={handleCouponChange} handleCouponApply={handleCouponApply} selectedCoupon={selectedCoupon} setSelectedCoupon={setSelectedCoupon} />

      </div>
    </>
  )
}
