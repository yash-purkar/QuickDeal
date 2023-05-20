import React from 'react'

const encodedToken = localStorage.getItem("encodedToken");

export const addToCart = async (product) => {

  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: encodedToken
      },
      body: JSON.stringify({ product })
    })

    const data = await response.json();
    // console.log(data)



  } catch (e) {
    console.log(e)
  }

}

export const removeFromCart = (id) => {

}