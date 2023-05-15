import React from 'react'

export const SingleCategory = ({ category }) => {
  const { _id, categoryName, description, img } = category;
  return (
    <div className='category-card'>
      <img src={img} alt="categoryName" className='category-img' />
      <div className="category-info">
        <h3 className='category-name'>{categoryName}</h3>
        <p className='category-desc'>{description}</p>
      </div>
    </div>
  )
}
