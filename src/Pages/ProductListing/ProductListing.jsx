import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Filters } from './Filters/Filters'

export const ProductListing = () => {
  return (
    <>
      <Navbar />
      <Filters />
      <h1>I am product listing</h1>

    </>
  )
}
