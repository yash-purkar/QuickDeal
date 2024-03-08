import React, { useEffect } from "react";
import "./Wishlist.css";
import { SingleProduct } from "../../Components/SingleProdcut/SingleProduct";
import { DataState } from "../../Contexts/Data/DataContext";
import emptyWishlist from "../../assets/emptyWishlist.svg";

export const Wishlist = () => {
  // getting withlist from data context
  const {
    state: { wishlist },
  } = DataState();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="text-center top-margin letter-spacing">
        {wishlist?.length > 0 ? (
          <h2>{`My Wishlist(${wishlist?.length})`}</h2>
        ) : (
          <div className="top-margin-5">
            <img
              src={emptyWishlist}
              alt="empty-wishlist"
              className="illustrations"
            />
            <h2 className="color-primary">Your Wishlist Is Empty</h2>
          </div>
        )}
      </div>

      <div className="wishlist-container">
        {wishlist?.map((product) => (
          <SingleProduct key={product._id} product={product} fromWishlist />
        ))}
      </div>
    </>
  );
};
