import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineStar, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'

import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext'
import { addToCart } from '../../Services/Cart/CartServices'
import { addToWishlist, removeFromWishlist } from '../../Services/Wishlist/WishlistServices'

export const ProductDetail = () => {
  const { id } = useParams();

  const { state: { products, cart, wishlist }, dispatch } = DataState();


  const product = products?.find(product => product._id === id);

  console.log(product, "detaio")
  const { _id, image, rating, reviews, size, category, description, itemName, oldPrice, newPrice, discount, isTrending, inStock, delivery_time, fewLeft } = product
  return (
    <div className='product-detail-container flex justify-center align-center wrap'>
      <div className='detail-img-box'>
        <img src={image} alt={itemName} className='detail-img' />
        {isTrending && <span className='trending'>Trending</span>}
        {
          wishlist?.some(product => product._id === _id) ? <span className='like  wishlist-red' onClick={() => removeFromWishlist(product._id, dispatch)}><AiFillHeart /></span> : <span className='like' onClick={() => addToWishlist(product, dispatch)} ><AiFillHeart /></span>
        }
      </div>


      <div className='product-details flex direction-column justify-between'>

        <div className='flex justify-between align-center'>

          <h2 className='font-1-3 header-md'>{itemName}</h2>
          <div className='detail-star-rating rating-star ' style={{ position: "unset" }}>
            <span><AiOutlineStar /></span>
            <span>{rating}</span>
          </div>
        </div>
        <div>
          <span className='new-price sm-fontsize'>₹{newPrice}</span>
          <span className='old-price right-margin sm-fontsize'>₹{oldPrice}</span>
          <span className='discount sm-fontsize'>{discount}% OFF</span>
        </div>
        {fewLeft && <p className='few-left font-extra-sm font-bold-md'> Hurry, Only Few Left!</p>}
        <div>
          <span className='right-margin font-bold font-sm font-md'>Availability : </span> <span className='in-stock font-md sm-fontsize'>{inStock ? "In Stock" : <span className='font-sm font-md' style={{ color: "red" }}>Out Of Stock</span>}</span>
        </div>
        <div>
          <span className='right-margin font-sm font-bold font-md'>Description : </span>
          <span className='sm-fontsize line-height'>{description}</span>
        </div>
        <div>
          <span className='right-margin font-bold font-sm font-md'>Size :</span>
          <span className='sm-fontsize'>{size}</span>
        </div>
        <div>
          <span className='right-margin font-bold font-sm font-md'>Delivery : </span>
          <span className='sm-fontsize'>{delivery_time}</span>
        </div>

        <div>
          {
            cart?.some(product => product._id === _id) ? <NavLink to="/cart">
              <button className="go-to-cart">Go To Cart</button></NavLink> :

              <button className={`${inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!inStock} onClick={() => addToCart(product, dispatch)}>{inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}</button>
          }
        </div>
      </div>

    </div>
  )
}
