import React from 'react'
import './Categories.css'
import { SingleCategory } from './SingleCategory'
import { categories } from '../../backend/db/categories'


export const Categories = () => {

  return (
    <>

      <h1 className='category-header'>shop by category</h1>
      <div className='categories'>
        {
          categories.map(category => <SingleCategory category={category} key={category._id} />)
        }
      </div>
    </>
  )
}
