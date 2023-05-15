import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Header } from '../../Components/Header/Header'
import { Features } from '../../Components/Features/Features'
import { Categories } from '../../Components/Categories/Categories'
import { Footer } from '../../Components/Footer/Footer'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Categories />
      <Footer />
    </>
  )
}
