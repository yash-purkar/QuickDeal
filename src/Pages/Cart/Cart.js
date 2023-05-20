import React, { useEffect, useState } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'

export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken")
  const getCartData = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: encodedToken
        },
      })
      // console.log(await response.json())
      const data = await response.json()
      // console.log(data)
      setCartData(data.cart)
    }
    catch (e) {
      console.error(e)
    }
  }

  console.log(cartData)

  useEffect(() => {
    getCartData()
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <h2 className='text-center top-margin'>My Cart(6)</h2>
      <div className="cart-main">
        <div className="cart-container">
          {
            cartData?.map(product => <SingleCartProduct key={product._id} product={product} />)
          }
        </div>
        <PriceDetails cartData={cartData} />
      </div>
    </>
  )
}
