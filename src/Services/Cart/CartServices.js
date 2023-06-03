import { success } from "../Toasts/ToastServices";

// const token = localStorage.getItem("encodedToken");
export const addToCart = async (product, dispatch, token, navigate, location) => {

  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: token
      },
      body: JSON.stringify({ product })
    })
    const data = await response.json();

    dispatch({ type: "CART_OPERATIONS", payload: data.cart });
    navigate(location?.state?.from?.pathname);
    success("Added To Cart");

  } catch (e) {
    console.log(e)
  }
}

export const removeFromCart = async (_id, dispatch, token) => {
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

export const updateCartItemQty = async (_id, type, dispatch, token) => {
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

  } catch (e) {
    console.log(e)
  }
}
