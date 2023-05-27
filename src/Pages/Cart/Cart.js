import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'


export const Cart = () => {
  const { state: { cart } } = DataState();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <h2 className='text-center top-margin letter-spacing'>{cart?.length > 0 ? `My Cart(${cart?.length})` : "Cart Is Empty🙁"}</h2>

      <div className="cart-main">
        <div className="cart-container">
          {
            cart?.map(product => <SingleCartProduct key={product._id} product={product} />)
          }

        </div>

        {
          cart?.length > 0 && <PriceDetails cartData={cart} />

        }

      </div>
    </>
  )
}
