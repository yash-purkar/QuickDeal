import React from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'

import './SingleProduct.css'
import { DataState } from '../../Contexts/DataContext/DataContext'
import { addToCart } from '../../Services/Cart/CartServices'
import { useNavigate } from 'react-router-dom'

export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending, inStock } = product
  const { state: { cart } } = DataState()


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
            <span className='like'><AiFillHeart /></span>
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
      <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock} onClick={() => addToCart}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button>

    </div>
  )
}
