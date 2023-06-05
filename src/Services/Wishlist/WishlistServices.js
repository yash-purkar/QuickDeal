import { remove, success } from "../Toasts/ToastServices"

export const addToWishlist = async (product, dispatch, token, navigate, location) => {
  try {
    const response = await fetch('/api/user/wishlist', {
      method: "POST",
      headers: {
        authorization: token
      },
      body: JSON.stringify({ product })
    })

    const data = await response.json()
    dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })

    success("Added To Wishlist")
    navigate(location?.state?.from?.pathname)

  } catch (e) {
    console.log(e)
  }
}


export const removeFromWishlist = async (_id, dispatch, token) => {
  try {
    const response = await fetch(`/api/user/wishlist/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: token
      }
    })

    const data = await response.json();
    dispatch({ type: "WISHLIST_OPERATIONS", payload: data.wishlist })
    remove("Removed From Wishlist")
  } catch (e) {
    console.log(e)
  }
}