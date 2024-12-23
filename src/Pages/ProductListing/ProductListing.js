import React, { useEffect } from "react";
import { Filters } from "./Filters/Filters";
import { DataState } from "../../Contexts/Data/DataContext";
import { SingleProduct } from "../../Components/SingleProdcut/SingleProduct";
import "./ProductListing.css";
import notFound from "../../assets/prodNotFound.svg";

// This components list all the porducts

export const ProductListing = () => {
  const {
    state: { products, filters },
    setLoading,
  } = DataState();
  const {
    searchValue,
    priceRange,
    sort,
    selectedCategories,
    selectedSizes,
    rating,
  } = filters;

  // It filters the data based on the filters
  const transformData = () => {
    let filteredData = [...products];

    // Filter based on the price range
    if (priceRange) {
      filteredData = filteredData.filter(
        (product) => product.newPrice <= priceRange
      );
    }

    // Filter based on the categories
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((prod) =>
        selectedCategories.some((category) => category === prod.category)
      );
    }

    // Filter based on the sizes
    if (selectedSizes.length > 0) {
      filteredData = filteredData.filter((prod) =>
        selectedSizes.some((size) => size === prod.size)
      );
    }

    // Filter based on the ratings.
    if (rating) {
      filteredData = filteredData.filter((prod) => prod.rating >= rating);
    }

    // Sort High to low or low to high
    if (sort) {
      filteredData =
        sort === "RESET"
          ? filteredData
          : filteredData.sort((a, b) =>
              sort === "LOW_TO_HIGH"
                ? a.newPrice - b.newPrice
                : b.newPrice - a.newPrice
            );
    }

    // Filter by search value.
    if (searchValue) {
      filteredData = filteredData.filter((product) =>
        product.itemName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filteredData;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      <div className="main-product-listing">
        <Filters />
        <div className="products-container flex justify-center align-start wrap">
          {transformData()?.length === 0 && products?.length > 0 && (
            <div className="top-margin-5">
              <img src={notFound} alt="not found" className="illustrations" />
              <h2 className="color-primary letter-spacing">
                Product Not Found
              </h2>
            </div>
          )}
          {transformData()?.length > 0 && (
            <div className="productlisting-header">
              <p className="all-products-heading letter-spacing">
                {searchValue ? "Search Results for" : "Showing All Products"}{" "}
              </p>
              <p className="products-count">
                {searchValue ? (
                  <strong>{searchValue}</strong>
                ) : (
                  `(${transformData().length} products)`
                )}
              </p>
            </div>
          )}
          {transformData()?.map((product) => (
            <SingleProduct product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};
