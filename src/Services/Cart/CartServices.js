import React from 'react'

const token = localStorage.getItem("encodedToken");

export const addToCart = async (product, dispatch) => {
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

export const removeFromCart = async (_id, dispatch) => {
  try {
    const response = await fetch(`/api/user/cart/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: token
      }
    })
    const data = await response.json()
    dispatch({ type: "CART_OPERATIONS", payload: data.cart })


  } catch (e) {
    console.log(e)
  }
}

export const moveToWishlist = async (product, dispatch) => {
  try {
    const response = await fetch('/api/user/wishlist', {
      method: "POST",
      headers: {
        authorization: token
      },
      body: JSON.stringify({ product })
    })

    const data = await response.json();
    removeFromCart(product._id, dispatch);
    dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist });

  } catch (e) {
    console.log(e)
  }
}


export const updateCartItemQty = async (_id, type, dispatch) => {
  try {
    const response = await fetch(`/api/user/cart/${_id}`, {
      method: "POST",
      headers: {
        authorization: token
      }
      ,
      body: JSON.stringify({ action: { type } })
    })

    const data = await response.json();
    dispatch({ type: "CART_OPERATIONS", payload: data.cart })
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}