import React from 'react'
import { Filters } from './Filters/Filters'
import { DataState } from '../../Contexts/Data/DataContext'
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct'
import './ProductListing.css';


export const ProductListing = () => {
  const { state: { products, filters } } = DataState();
  const { searchValue, sort } = filters;

  const transformData = () => {
    let filteredData = [...products];
    if (searchValue) {
      filteredData = filteredData.filter(product => product.itemName.toLowerCase().includes(searchValue.toLowerCase()))
    }
    if (sort) {
      filteredData = filteredData.sort((a, b) => sort === "LOW_TO_HIGH" ? a.newPrice - b.newPrice : b.newPrice - a.newPrice)
    }

    return filteredData;
  }

  return (
    <>
      <div className='main-product-listing'>
        <Filters />
        <div className='products-container flex justify-center align-start wrap'>
          <div className="productlisting-header">
            <p className='all-products-heading'>{searchValue ? "Search Results for" : "Showing All Products"} </p>
            <p className='products-count'>{searchValue ? <strong>{searchValue}</strong> : `(${transformData().length} products)`}</p>
          </div>
          {
            transformData()?.map(product => <SingleProduct product={product} key={product._id} />)
          }
        </div>
      </div>
    </>
  )
}
