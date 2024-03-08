import { useNavigate } from "react-router-dom";
import { DataState } from "../../../../Contexts/Data/DataContext";
import "./SingleCartProduct.css";
import {
  removeFromCart,
  updateCartItemQty,
} from "../../../../Services/Cart/CartServices";
import { useState } from "react";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../../Services/Wishlist/WishlistServices";
import { remove } from "../../../../Services/Toasts/ToastServices";
import { AiFillHeart } from "react-icons/ai";

export const SingleCartProduct = ({ product }) => {
  const { _id, image, qty, itemName, oldPrice, newPrice, discount } = product;
  const {
    dispatch,
    state: { wishlist },
  } = DataState();

  // getting token form localstorage
  const token = localStorage.getItem("encodedToken");

  const [disabledBtn, setDisabledBtn] = useState(false);

  const navigate = useNavigate();

  // It handles product click.
  const handleProductClick = (_id) => {
    navigate(`/product/${_id}`);
  };

  // Add to wishlist from cart page
  const handleAddToWishlist = (product, dispatch, token) => {
    setDisabledBtn(true);
    addToWishlist(product, dispatch, token);
    setTimeout(() => {
      setDisabledBtn(false);
    }, 1000);
  };

  // update quantity of product in the cart
  const handleQuantity = (type) => {
    updateCartItemQty(_id, type, dispatch, token);
  };

  // It handles remove from cart
  const handleRemoveFromCart = (_id, dispatch, token) => {
    setDisabledBtn(true);
    removeFromCart(_id, dispatch, token);
    remove("Removed From Cart");
    setTimeout(() => {
      setDisabledBtn(false);
    }, 1000);
  };

  // It handles remove from wishlist
  const handleRemoveFromWishlist = (_id, dispatch, token) => {
    setDisabledBtn(true);
    removeFromWishlist(_id, dispatch, token);
    setTimeout(() => {
      setDisabledBtn(false);
    }, 1000);
  };

  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">
        <img
          src={image}
          alt={itemName}
          className="cart-product-img cursor-pointer"
          onClick={() => handleProductClick(_id)}
        />
        {wishlist?.some((product) => product._id === _id) && token ? (
          <button
            className="like cart-like  wishlist-red"
            disabled={disabledBtn}
            onClick={() => handleRemoveFromWishlist(_id, dispatch, token)}
          >
            <AiFillHeart />
          </button>
        ) : (
          <button
            className="like cart-like"
            disabled={disabledBtn}
            onClick={() => handleAddToWishlist(product, dispatch, token)}
          >
            <AiFillHeart />
          </button>
        )}
        <div className="product-info">
          <h4 className="cart-item-name">{itemName}</h4>
          <div className="cart-product-prices">
            <span className="new-price get-fontsize font-1-rem">
              ₹{newPrice}
            </span>
            <span className="old-price font-1-rem">₹{oldPrice}</span>
            <span className="discount get-fontsize">({discount}%OFF)</span>
          </div>

          <div className="quantity-operations">
            <p className="qty-label">Quantity: </p>
            <button
              onClick={() => handleQuantity("decrement", token)}
              className="decrease-qty cursor-pointer"
              disabled={qty < 2}
            >
              -
            </button>
            <p className="qty">{qty}</p>
            <button
              onClick={() => handleQuantity("increment", token)}
              className="increase-qty cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="remove-operations">
        <button
          className="remove-product "
          disabled={disabledBtn}
          onClick={() => handleRemoveFromCart(_id, dispatch, token)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
