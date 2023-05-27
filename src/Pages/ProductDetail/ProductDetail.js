import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineStar, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'

import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext'
import { addToCart } from '../../Services/Cart/CartServices'
import { addToWishlist, removeFromWishlist } from '../../Services/Wishlist/WishlistServices'
import { loginTocontinue } from '../../Services/Toasts/ToastServices'
import { getProductDetails } from '../../Services/Product/ProductDetailServices'

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  const { state: { cart, wishlist, token }, dispatch } = DataState();
  const navigate = useNavigate();
  const location = useLocation();

  const [disabledBtn, setDisabledBtn] = useState();


  useEffect(() => {
    getProductDetails(productId, setProduct);
  }, [])

  const handleAddToCart = (product, dispatch, token, navigate, location) => {
    if (token) {
      setDisabledBtn(true)
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

  const handleAddToWishlist = (product, dispatch, token, navigate, location) => {
    if (token) {
      setDisabledBtn(true)
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

  const handleRemoveWishlist = (_id, dispatch, token) => {
    removeFromWishlist(_id, dispatch, token);
  }


  return (
    <>
      {product && <div className='product-detail-container flex justify-center align-center wrap'>
        <div className='detail-img-box'>
          <img src={product.image} alt={product.itemName} className='detail-img' />
          {product.isTrending && <span className='trending'>Trending</span>}
          {
            wishlist?.some(prod => prod._id === product._id) ? <span className='like  wishlist-red' onClick={() => handleRemoveWishlist(product._id, dispatch, token)}><AiFillHeart /></span> : <button className='like' disabled={disabledBtn} onClick={() => handleAddToWishlist(product, dispatch, token, navigate, location)} ><AiFillHeart /></button>
          }
        </div>


        <div className='product-details flex direction-column justify-between'>

          <div className='flex justify-between align-center'>

            <h2 className='font-1-3 header-md'>{product.itemName}</h2>
            <div className='detail-star-rating rating-star ' style={{ position: "unset" }}>
              <span><AiOutlineStar /></span>
              <span>{product.rating}</span>
            </div>
          </div>
          <div>
            <span className='new-price sm-fontsize'>₹{product.newPrice}</span>
            <span className='old-price right-margin sm-fontsize'>₹{product.oldPrice}</span>
            <span className='discount sm-fontsize'>{product.discount}% OFF</span>
          </div>
          {product.fewLeft && <p className='few-left font-extra-sm font-bold-md'> Hurry, Only Few Left!</p>}
          <div>
            <span className='right-margin font-bold font-sm font-md'>Availability : </span> <span className='in-stock font-md sm-fontsize'>{product.inStock ? "In Stock" : <span className='font-sm font-md' style={{ color: "red" }}>Out Of Stock</span>}</span>
          </div>
          <div>
            <span className='right-margin font-sm font-bold font-md'>Description : </span>
            <span className='sm-fontsize line-height'>{product.description}</span>
          </div>
          <div>
            <span className='right-margin font-bold font-sm font-md'>Size :</span>
            <span className='sm-fontsize'>{product.size}</span>
          </div>
          <div>
            <span className='right-margin font-bold font-sm font-md'>Delivery : </span>
            <span className='sm-fontsize'>{product.delivery_time}</span>
          </div>

          <div>
            {
              cart?.some(prod => prod._id === product._id) ? <NavLink to="/cart">
                <button className="go-to-cart">Go To Cart</button></NavLink> :

                <button className={`${product.inStock ? "add-to-cart" : "out-of-stock-btn"}`} disabled={!product.inStock || disabledBtn} onClick={() => handleAddToCart(product, dispatch, token, navigate, location)}>

                  {product.inStock ? "Add To Cart" : <span className='out-of-stock'>OUT OF STOCK</span>}
                </button>
            }
          </div>
        </div>

      </div>}
    </>
  )
}
