import React from 'react'
import { Filters } from './Filters/Filters'
import { DataState } from '../../Contexts/Data/DataContext'
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct'
import './ProductListing.css';


export const ProductListing = () => {
  const { state: { products, filters } } = DataState();
  const { searchValue } = filters;

  const transformData = () => {
    let filteredData = [...products];
    if (searchValue) {
      filteredData = filteredData.filter(product => product.itemName.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return filteredData;
  }

  return (
    <>
      <div className='main-product-listing'>
        <Filters />
        <div className='products-container'>
          <div className="productlisting-header"><p className='all-products-heading'>Showing All Products</p><p className='products-count'>({products.length} products)</p></div>
          {
            transformData()?.map(product => <SingleProduct product={product} key={product._id} />)
          }
        </div>
      </div>
    </>
  )
}
