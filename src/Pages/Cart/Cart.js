import React, { useEffect, useState } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'

export const Cart = () => {

  return (
    <>
      <h2 className='text-center top-margin'>My Cart(6)</h2>
      <div className="cart-main">
        <div className="cart-container">
          {/* {
            cartData?.map(product => <SingleCartProduct key={product._id} product={product} />)
          } */}
        </div>
        <PriceDetails />
      </div>
    </>
  )
}
