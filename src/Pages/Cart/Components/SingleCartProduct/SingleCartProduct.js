import { NavLink, useNavigate } from 'react-router-dom';
import { DataState } from '../../../../Contexts/Data/DataContext';
import './SingleCartProduct.css';
import { removeFromCart, moveToWishlist, updateCartItemQty } from '../../../../Services/Cart/CartServices';
import { useState } from 'react';
import { remove, success } from '../../../../Services/Toasts/ToastServices';


export const SingleCartProduct = ({ product }) => {
  const { _id, image, qty, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
  const { dispatch, state: { cart, wishlist, token } } = DataState()



  // console.log(product._id)

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  const handleQuantity = (type) => {
    updateCartItemQty(_id, type, dispatch, token)
  }

  const handleRemoveFromCart = (_id, dispatch, token) => {
    removeFromCart(_id, dispatch, token)
    remove("Removed From Cart")
  }

  const handleMoveToWishlist = (product, dispatch, token) => {
    moveToWishlist(product, dispatch, token);
    success("Moved To Wishlist");
  }
  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">
        <img src={image} alt={itemName} className="cart-product-img cursor-pointer" onClick={() => handleProductClick(_id)} />
        <div className="product-info">
          <h4 className='cart-item-name'>{itemName}</h4>
          <div className="cart-product-prices">
            <span className='new-price get-fontsize font-1-rem'>₹{newPrice}</span>
            <span className='old-price font-1-rem'>₹{oldPrice}</span>
            <span className='discount get-fontsize'>({discount}%OFF)</span>
          </div>

          <div className='quantity-operations'>
            <p className='qty-label'>Quantity: </p>
            <button onClick={() => handleQuantity("decrement", token)} className='decrease-qty cursor-pointer' disabled={qty < 2}>-</button>
            <p className='qty'>{qty}</p>
            <button onClick={() => handleQuantity("increment", token)} className='increase-qty cursor-pointer' >+</button>
          </div>

        </div>
      </div>
      <div className='remove-operations'>
        <button className='remove-product ' onClick={() => handleRemoveFromCart(_id, dispatch, token)}>Remove</button>
        {wishlist?.some(product => product._id === _id) ? <NavLink to="/wishlist"><button className='already-in-wishlist' >Already in wishlist</button></NavLink> : <button className='move-to-wishlist' onClick={() => handleMoveToWishlist(product, dispatch, token)}>Move To Wishlist</button>}
      </div>
    </div>
  )
}