import React from 'react'
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'

import './ProductDetail.css'

export const ProductDetail = () => {
  return (
    <div className='product-detail-container flex justify-center align-center wrap'>
      <div className='detail-img-box'>
        <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70" alt="itemName" className='detail-img' />
        <div className='detail-star-rating rating-star '>
          <span><AiOutlineStar /></span>
          <span>4.8</span>
        </div>
        <span className='like'><AiFillHeart /></span>
      </div>


      <div className='product-details flex direction-column justify-between'>

        <h2 className='font-1-3 header-md'>Puma</h2>
        <div>
          <span className='new-price sm-fontsize'>₹390</span>
          <span className='old-price right-margin sm-fontsize'>₹790</span>
          <span className='discount sm-fontsize'>50% OFF</span>
        </div>
        <p className='few-left font-extra-sm font-bold-md'>Hurry, Only Few Left!</p>
        <div>
          <span className='right-margin font-bold font-sm font-md'>Availability : </span> <span className='in-stock font-md sm-fontsize'>In Stock</span>
        </div>
        <div>
          <span className='right-margin font-sm font-bold font-md'>Description : </span>
          <span className='sm-fontsize line-height'>Girls Black Embellished Net & Velvet Finish Fit & Flare Dress</span>
        </div>
        <div>
          <span className='right-margin font-bold font-sm font-md'>Size :</span>
          <span className='sm-fontsize'>M</span>
        </div>
        <div>
          <span className='right-margin font-bold font-sm font-md'>Delivery : </span>
          <span className='sm-fontsize'>in 3 days</span>
        </div>

        <div>
          <button className='add-to-cart sm-fontsize'>Add To Cart</button>
        </div>
      </div>

    </div>
  )
}
