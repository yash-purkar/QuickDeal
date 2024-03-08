import React from "react";
import "./Categories.css";
import { SingleCategory } from "./SingleCategory";
import { DataState } from "../../Contexts/Data/DataContext";

// It displays categories of the products

export const Categories = () => {
  const {
    state: { categories },
  } = DataState();

  return (
    <>
      <h1 className="category-header">shop by category</h1>
      <div className="categories">
        {categories?.map((category) => (
          <SingleCategory category={category} key={category._id} />
        ))}
      </div>
    </>
  );
};
