import React, { useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Filters.css'

export const Filters = () => {
  const [isFilters, setIsFilters] = useState(false)
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
          <button>Clear</button>
        </div>
        <h3 className='price-heading filter-type'>Sort By Price</h3>
        <label htmlFor="lowToHigh">
          <input type="radio" name="sort" id="lowToHigh" />
          <span className='filters-names'>Low To High</span>
        </label>
        <label htmlFor="highToLow">
          <input type="radio" name="sort" id="highToLow" />
          <span className='filters-names'>  High To Low</span>
        </label>

        {/* Categories */}
        <h3 className='category-heading filter-type'>Categories</h3>
        <label htmlFor="category-men">
          <input type="checkbox" className='category' /> <span className='filters-names'>Men</span>
        </label>
        <label htmlFor="category-men">
          <input type="checkbox" className='category' /> <span className='filters-names'>Women</span>
        </label>
        <label htmlFor="category-men kids">
          <input type="checkbox" className='category ' /><span className='filters-names'> Kids</span>
        </label>

        {/* Sizes */}
        <h3 className='sizes-heading filter-type'>Sizes</h3>
        {
          ["S", "M", "L", "XL", "XXL"].map(size => <label htmlFor="">
            <input type="checkbox" className='size' /> <span className='filters-names'>{size}</span>
          </label>)
        }


        {/* Ratings */}
        <h3 className='ratings-heading filter-type'>Ratings</h3>
        <label htmlFor="">
          <input type="range" className='range' />
        </label>

      </div>
    </div>
  )
}
