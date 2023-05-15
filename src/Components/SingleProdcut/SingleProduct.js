import React from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'

import './SingleProduct.css'

export const SingleProduct = ({ product }) => {
  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
  return (
    <div className='product-card'>
      <div className='card-header'>
        <img src={image} alt={itemName} className='product-image' />
        <div>
          <div className='trending-like-box'>
            <span className='trending'>Trending</span>
            <span className='like'><AiFillHeart /></span>
          </div>
          <div className='rating-and-size'>
            <p className='ratings-info'><span className='rating-star'><AiOutlineStar /><span className='rating'>{rating}</span></span></p>
            <p className='prod-size'>{size}</p>
          </div>
        </div>
      </div>
      <p className='product-name'>{itemName}</p>
      <div className='price-and-discount'>
        <div className="prices">
          <span className='new-price'>₹{newPrice}</span>
          <span className='old-price'>₹{oldPrice}</span>
        </div>
        <p className='discount'>{discount}% OFF</p>
      </div>
      <button className='add-to-cart'>Add To Cart</button>

    </div>
  )
}
