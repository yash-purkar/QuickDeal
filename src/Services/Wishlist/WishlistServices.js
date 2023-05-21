const token = localStorage.getItem("encodedToken");

export const addToWishlist = async (product, dispatch) => {

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


export const removeFromWishlist = async (_id, dispatch) => {
  try {
    const response = await fetch(`/api/user/wishlist/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: token
      }
    })

    const data = await response.json();
    dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })
  } catch (error) {

  }
}