import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'
import emptyCart from '../../assets/emptyCart.svg'

export const Cart = () => {
  const { state: { cart } } = DataState();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='text-center top-margin'>{cart?.length > 0 ? <h2 className=' letter-spacing'>{`My Cart(${cart?.length})`}</h2> : <>
        <div className='top-margin-5'>
          <img src={emptyCart} alt="empty-cart" className='illustrations margin-bottom-1' />
          <h2 className='color-primary letter-spacing'>Your Cart Is Empty</h2>
        </div>
      </>}</div>

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
