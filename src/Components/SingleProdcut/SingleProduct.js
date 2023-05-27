import React, { useState } from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'
import './SingleProduct.css'
import { DataState } from '../../Contexts/Data/DataContext'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { addToCart } from '../../Services/Cart/CartServices'
import { addToWishlist, removeFromWishlist } from '../../Services/Wishlist/WishlistServices'
import { loginTocontinue } from '../../Services/Toasts/ToastServices'

export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const { _id, image, rating, size, itemName, oldPrice, newPrice, discount, isTrending, inStock } = product

  const { state: { cart, wishlist }, dispatch } = DataState();

  const [disabledBtn, setDisabledBtn] = useState(false);

  const token = localStorage.getItem("encodedToken");

  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }



  const handleAddToCart = () => {
    if (token) {
      setDisabledBtn(true);
      addToCart(product, dispatch, token, navigate, location);

      setTimeout(() => {
        setDisabledBtn(false)
      }, 1000)
    }
    else {
      navigate("/login", { state: { from: location } })
      loginTocontinue("Login To Continue")
    }
  }

  const handleAddToWishlist = (product, dispatch) => {
    if (token) {
      setDisabledBtn(true);
      addToWishlist(product, dispatch, token, navigate, location);
      setTimeout(() => {
        setDisabledBtn(false)
      }, 1000)
    }
    else {
      navigate("/login", { state: { from: location } })
      loginTocontinue("Login To Continue")
    }
  }

  const handleRemoveWishlistItem = () => {
    removeFromWishlist(_id, dispatch, token);

  }

  return (
    <div className='product-card flex direction-column'>

      <div className="card-header">
        <img src={image} alt={itemName} className='product-image' onClick={() => handleProductClick(_id)} />
        <div>
          <div className='trending-like-box'>
            {isTrending && <span className='trending'>Trending</span>}
            {
              wishlist?.some(product => product._id === _id) && token ? <span className='like  wishlist-red' onClick={() => handleRemoveWishlistItem(_id, dispatch, token)}><AiFillHeart /></span> : <button className='like' disabled={disabledBtn} onClick={() => handleAddToWishlist(product, dispatch)} ><AiFillHeart /></button>
            }
          </div>

          <p className='prod-size'>{size}</p>
        </div>
      </div>
      <div className='name-and-rating flex justify-between bottom-margin-sm'>
        <p className='product-name'>{itemName}</p>
        <div className='rating-and-size'>
          <p className='ratings-info'><span className='rating-star flex justify-center'><AiOutlineStar /><span className='rating'>{rating}</span></span></p>
        </div>

      </div>
      <div className='price-and-discount flex justify-between bottom-margin-sm'>

        <div className="prices">
          <span className='new-price'>₹{newPrice}</span>
          <span className='old-price'>₹{oldPrice}</span>
        </div>
        <p className='discount'>{discount}% OFF</p>
      </div>
      {
        cart?.some(product => product._id === _id) && token ? <NavLink to="/cart">
          <button className="go-to-cart" disabled={disabledBtn}>Go To Cart</button></NavLink> :

          <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock || disabledBtn} onClick={() => handleAddToCart(product, dispatch)}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button>
      }


    </div>
  )
}
