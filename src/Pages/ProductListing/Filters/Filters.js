import React, { useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Filters.css'
import { DataState } from '../../../Contexts/Data/DataContext'

export const Filters = () => {
  const [isFilters, setIsFilters] = useState(false);
  const [rangeValue, setRangeValue] = useState(1);
  const { dispatch, state: { filters: { sort, selectedCategories, selectedSizes } } } = DataState();

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value)
    dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
  }

  return (
    <div>
      <div onClick={() => setIsFilters(prev => !prev)} className='btn-box'>
        {isFilters ? <span className='hide-filters'><RxCross1 /> </span> : <div>
          <button className='filter-btn'><span className='filters-head'>Filters</span><MdFilterAlt className='filter-icon' /></button>
        </div>}
      </div>

      <div className='filters-box' style={{ display: isFilters ? "flex" : "none" }}>
        {/* By price */}
        <div className='filters-top'>
          <h2>Filters</h2>
          <button className='clear-filters'>Clear</button>
        </div>
        <h3 className='price-heading filter-type'>Sort By Price</h3>

        <label htmlFor="lowToHigh" className='cursor-pointer'>
          <input type="radio" name="sort" id="lowToHigh" onChange={() => dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })} checked={sort === "LOW_TO_HIGH"} />
          <span className='filters-names'>Low To High</span>
        </label>

        <label htmlFor="highToLow" className='cursor-pointer'>
          <input type="radio" name="sort" id="highToLow" onChange={() => dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })} checked={sort === "HIGH_TO_LOW"} />
          <span className='filters-names'>  High To Low</span>
        </label>

        {/* Categories */}
        <h3 className='category-heading filter-type'>Categories</h3>
        <label htmlFor="category-men" className='cursor-pointer' onClick={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: "Men" })}>
          <input type="checkbox" className='category' checked={selectedCategories.includes("Men")} /> <span className='filters-names'>Men</span>
        </label>

        <label htmlFor="category-women" className='cursor-pointer' onClick={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: "Women" })}>
          <input type="checkbox" className='category' checked={selectedCategories.includes("Women")} /> <span className='filters-names'>Women</span>
        </label>

        <label htmlFor="category-kids  className='cursor-pointer'kids" onClick={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: "Kids" })}>
          <input type="checkbox" className='category' checked={selectedCategories.includes("Kids")} /><span className='filters-names'> Kids</span>
        </label>

        {/* Sizes */}
        <h3 className='sizes-heading filter-type'>Sizes</h3>
        {
          ["S", "M", "L", "XL", "XXL"].map(size => <label htmlFor="" className='cursor-pointer' key={size} onClick={() => dispatch({ type: "FILTER_BY_SIZE", payload: size })}>
            <input type="checkbox" className='size' checked={selectedSizes.includes(size)} /> <span className='filters-names'>{size}</span>
          </label>)
        }


        {/* Ratings */}
        <h3 className='ratings-heading filter-type'>Ratings</h3>

        <label htmlFor="" className='range-input cursor-pointer'>
          <input type="range" id="range" className='range' onChange={handleRangeChange} min="1" max="5" value={rangeValue} />
        </label>
        <div className='ratings-box flex justify-between'>
          <span className='rating-num'>1</span>
          <span className='rating-num'>2</span>
          <span className='rating-num'>3</span>
          <span className='rating-num'>4</span>
          <span className='rating-num'>5</span>
        </div>
      </div>
    </div >
  )
}
