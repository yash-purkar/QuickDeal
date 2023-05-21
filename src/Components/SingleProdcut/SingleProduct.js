import React from 'react'
import { AiOutlineStar, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import './SingleProduct.css'
import { DataState } from '../../Contexts/Data/DataContext'
import { NavLink, useNavigate } from 'react-router-dom'

export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending, inStock } = product

  const { state: { cart }, dispatch } = DataState();

  const token = localStorage.getItem("encodedToken");

  // ************
  const addToCart = async (product) => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token
        },
        body: JSON.stringify({ product })
      })
      const data = await response.json();
      // console.log(data.cart)
      dispatch({ type: "CART_OPERATIONS", payload: data.cart })


    } catch (e) {
      console.log(e)
    }

  }


  const addToWishlist = async (product) => {

    try {
      const response = await fetch('/api/user/wishlist', {
        method: "POST",
        headers: {
          authorization: token
        },
        body: JSON.stringify({ product })
      })

      const data = await response.json()
      // console.log(data)
      dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })
    } catch (e) {
      console.log(e)
    }
  }



  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='product-card flex direction-column'>

      <div className="card-header">
        <img src={image} alt={itemName} className='product-image' onClick={() => handleProductClick(_id)} />
        <div>
          <div className='trending-like-box'>
            {isTrending && <span className='trending'>Trending</span>}
            <span className='like' onClick={() => addToWishlist(product)}><AiFillHeart /></span>
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
        cart?.some(item => item._id === _id) ? <NavLink to="/cart" className='go-to-cart-link '><button className="go-to-cart"><AiOutlineShoppingCart className='goto-cart-icon' /></button></NavLink> : <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock} onClick={() => addToCart(product)}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button>
      }

      {/* <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock} onClick={() => addToCart(product)}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button> */}

    </div>
  )
}
