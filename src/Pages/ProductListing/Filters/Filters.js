import React, { useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'
import './Filters.css'
import { DataState } from '../../../Contexts/Data/DataContext'

export const Filters = () => {
  const [isFilters, setIsFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(2000)
  const { dispatch, state: { filters: { sort, selectedCategories, selectedSizes, rating } } } = DataState();

  const handlePriceChange = (e) => {
    setPriceRange(Number(e.target.value));
    dispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })
  }

  return (
    <div>
      <div onClick={() => setIsFilters(prev => !prev)} className='btn-box'>
        {isFilters ? <span className='hide-filters'><RxCross1 /> </span> : <div>
          <button className='filter-btn'><span className='filters-head'>Filters</span><MdFilterAlt className='filter-icon' /></button>
        </div>}
      </div>

      <div className='filters-box' style={{ display: isFilters ? "flex" : "none" }}>



        <div className='filters-top'>
          <h2>Filters</h2>
          <button onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })} className='clear-filters font-1-3'>Clear</button>
        </div>

        {/* Price range */}
        <h4 className='font-1-2  top-margin margin-bottom-1'>Price</h4>
        <input type="range" list='price-range' min="500" max="2000" step="500" onChange={handlePriceChange} value={priceRange} />
        <div className='flex justify-between margin-bottom-1 bottom-border-1 padding-bottom-1'>
          {[500, 1000, 1500, 2000].map(price => <p key={price} className={`${priceRange === price && "font-bold"} bottom-margin-md`}>{price}</p>)}
        </div>


        {/* Categories */}
        <h4 className=' font-1-2  top-margin margin-bottom-1'>Categories</h4>
        <div className='flex direction-column padding-bottom-1 bottom-margin-md bottom-border-1'>
          {
            ["Men", "Women", "Kids"].map(category => <label htmlFor={category} className='cursor-pointer' onClick={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })} key={category}>
              <input type="checkbox" className='bottom-margin-md font-roboto' checked={selectedCategories.includes(category)} /> <span className='display-inline-block bottom-margin-md'>{category}</span>
            </label>)
          }
        </div>

        {/* Sizes */}
        <h4 className=' font-1-2  top-margin margin-bottom-1  bottom-margin-md font-roboto'>Sizes</h4>
        <div className='flex direction-column padding-bottom-1 bottom-margin-md bottom-border-1'>

          {
            ["S", "M", "L", "XL", "XXL"].map(size => <label htmlFor="" className='cursor-pointer' key={size} onClick={() => dispatch({ type: "FILTER_BY_SIZE", payload: size })}>
              <input type="checkbox" className='bottom-margin-md font-roboto' checked={selectedSizes.includes(size)} /> <span className='display-inline-block bottom-margin-md'>{size}</span>
            </label>)
          }
        </div>

        {/* Ratings */}
        <h4 className='font-1-2  top-margin margin-bottom-1  bottom-margin-md'>Ratings</h4>

        <div className='flex direction-column bottom-border-1 padding-bottom-1'>

          {[4, 3, 2, 1].map(item => <label onClick={() => dispatch({ type: "FILTER_BY_RATING", payload: item })} htmlFor="rating" name="rating" className='padding-bottom-0-4 cursor-pointer'>
            <input type="radio" name="rating" value={item} checked={rating === item} />
            <span>{item}<AiFillStar className='filter-rating-star' /> & Above</span>
          </label>)}
        </div>



        {/*sort By price */}
        <h4 className='font-1-2  top-margin margin-bottom-1'>Sort By Price</h4>

        <label htmlFor="lowToHigh" className='cursor-pointer' onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })}>
          <input type="radio" name="sort" checked={sort === "LOW_TO_HIGH"} />
          <span className='display-inline-block bottom-margin-md'>Low To High</span>
        </label>

        <label htmlFor="highToLow " onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })} className='cursor-pointer '>
          <input type="radio" name="sort" checked={sort === "HIGH_TO_LOW"} />
          <span className='display-inline-block bottom-margin-md '>  High To Low</span>
        </label>

        <label htmlFor="RESET " onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "RESET" })} className='cursor-pointer padding-bottom-1  bottom-border-1'>
          <input type="radio" name="sort" checked={sort === "RESET"} />
          <span className='display-inline-block bottom-margin-md '>  Reset</span>
        </label>









      </div>
    </div >
  )
}
