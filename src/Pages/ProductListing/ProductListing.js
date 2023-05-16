import React from 'react'
import { Filters } from './Filters/Filters'
import { DataState } from '../../Contexts/Data/DataContext'
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct'
import './ProductListing.css';


export const ProductListing = () => {
  const { state: { products } } = DataState();
  // console.log(products);
  return (
    <>
      <div className='main-product-listing'>
        <Filters />
        <div className='products-container'>
          <div className="productlisting-header"><p className='all-products-heading'>Showing All Products</p><p className='products-count'>({products.length} products)</p></div>
          {
            products?.map(product => <SingleProduct product={product} key={product._id} />)
          }
        </div>
      </div>
    </>
  )
}
