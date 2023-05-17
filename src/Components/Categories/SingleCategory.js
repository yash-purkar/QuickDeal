import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext';

export const SingleCategory = ({ category }) => {
  const { _id, categoryName, description, img } = category;
  const navigate = useNavigate();
  const { dispatch } = DataState()

  const handleCategoryClick = () => {
    navigate("/productlisting")
    dispatch({ type: "FILTER_BY_CATEGORIES", payload: category.categoryName })
  }
  return (
    <div className='category-card' onClick={handleCategoryClick}>
      <img src={img} alt="categoryName" className='category-img' />
      <div className="category-info">
        <h3 className='category-name'>{categoryName}</h3>
        <p className='category-desc'>{description}</p>
      </div>
    </div>
  )
}
