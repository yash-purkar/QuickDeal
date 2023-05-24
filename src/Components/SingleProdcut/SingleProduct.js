import React from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'
import './SingleProduct.css'
import { DataState } from '../../Contexts/Data/DataContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { addToCart } from '../../Services/Cart/CartServices'
import { addToWishlist, removeFromWishlist } from '../../Services/Wishlist/WishlistServices'
import { AuthState } from '../../Contexts/Auth/AuthContext'
export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending, inStock } = product

  const { state: { cart, wishlist }, dispatch } = DataState();
  const { isLoggedIn } = AuthState()
  const token = localStorage.getItem("encodedToken");

  // ************

  // **********

  // **********


  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }


  const handleAddToWishlist = (product, dispatch) => {
    if (isLoggedIn) {
      addToWishlist(product, dispatch)
    }
    else {
      navigate("/wishlist")
    }
  }

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(product, dispatch)
    }
    else {
      navigate("/cart")
    }
  }


  return (
    <div className='product-card flex direction-column'>

      <div className="card-header">
        <img src={image} alt={itemName} className='product-image' onClick={() => handleProductClick(_id)} />
        <div>
          <div className='trending-like-box'>
            {isTrending && <span className='trending'>Trending</span>}
            {
              wishlist?.some(product => product._id === _id) ? <span className='like  wishlist-red' onClick={() => removeFromWishlist(_id, dispatch)}><AiFillHeart /></span> : <span className='like' onClick={() => handleAddToWishlist(product, dispatch)} ><AiFillHeart /></span>
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
        cart?.some(product => product._id === _id) ? <NavLink to="/cart">
          <button className="go-to-cart">Go To Cart</button></NavLink> :

          <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock} onClick={() => handleAddToCart(product, dispatch)}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button>
      }


    </div>
  )
}
