import React, { useEffect } from 'react'
import { Filters } from './Filters/Filters'
import { DataState } from '../../Contexts/Data/DataContext'
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct'
import './ProductListing.css';
import notFound from '../../assets/prodNotFound.svg'


export const ProductListing = () => {
  const { state: { products, filters }, setLoading } = DataState();
  const { searchValue, priceRange, sort, selectedCategories, selectedSizes, rating } = filters;


  const transformData = () => {
    let filteredData = [...products];
    if (searchValue) {
      filteredData = filteredData.filter(product => product.itemName.toLowerCase().includes(searchValue.toLowerCase()))
    }
    if (priceRange) {
      filteredData = filteredData.filter(product => product.newPrice <= priceRange)
    }
    if (sort) {
      filteredData = sort === "RESET" ? filteredData : filteredData.sort((a, b) => sort === "LOW_TO_HIGH" ? a.newPrice - b.newPrice : b.newPrice - a.newPrice)
    }
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter(prod => selectedCategories.some(category => category === prod.category))
    }

    if (selectedSizes.length > 0) {
      filteredData = filteredData.filter(prod => selectedSizes.some(size => size === prod.size))
    }
    if (rating) {
      filteredData = filteredData.filter(prod => prod.rating >= rating)
    }
    return filteredData;
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [])

  return (
    <>
      <div className='main-product-listing'>
        <Filters />
        <div className='products-container flex justify-center align-start wrap'>
          {transformData()?.length === 0 && products?.length > 0 && <div className='top-margin-5'>
            <img src={notFound} alt="not found" className='illustrations' />
            <h2 className='color-primary letter-spacing'>Product Not Found</h2>
          </div>}
          {
            transformData()?.length > 0 && <div className="productlisting-header">
              <p className='all-products-heading'>{searchValue ? "Search Results for" : "Showing All Products"} </p>
              <p className='products-count'>{searchValue ? <strong>{searchValue}</strong> : `(${transformData().length} products)`}</p>
            </div>
          }
          {
            transformData()?.map(product => <SingleProduct product={product} key={product._id} />)
          }
        </div>

      </div>
    </>
  )
}
