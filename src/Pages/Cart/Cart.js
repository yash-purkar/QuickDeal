import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
const dummyCart = [
  {
    _id: 1,

    itemName: "Men's Jacket",
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?size=626&ext=jpg&ga=GA1.1.1963083236.1682951392&semt=sph",
    description: "A stylish and durable jacket for men.",
    rating: 4.8,
    reviews: 12,
    size: "XL",
    category: "Men",
    oldPrice: 2099,
    newPrice: 1154,
    discount: 45,
    isTrending: true,
    inStock: true,
    delivery_time: "4-6 business days",
    fewLeft: true,
  },
  {
    _id: 2,
    itemName: "Men's Tshirt",
    image: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg",
    description: "A premium quality and stylish T-shirt for men.",
    rating: 4.5,
    reviews: 10,
    size: "L",
    category: "Men",
    oldPrice: 1499,
    newPrice: 704,
    discount: 53,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,

  },
  {
    _id: 3,
    itemName: "Kid's Hoddie",
    image: "https://img.freepik.com/premium-photo/clothes-schoolchildren-studio-portrait-little-boy-trendy-blue-sports-suit-white-background-cool-schoolboy-dressed-comfortable-children-s-sportswear-banner_417694-386.jpg?size=626&ext=jpg",
    description: "A cozy and warm hoodie for kids.",
    rating: 4.7,
    reviews: 8,
    size: "S",
    category: "Kids",
    oldPrice: 1099,
    newPrice: 619,
    discount: 43,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 4,

    image: "https://img.freepik.com/free-photo/attractive-man-wearing-dark-blue-suit_1139-1.jpg?size=626&ext=jpg&ga=GA1.2.1963083236.1682951392&semt=ais",
    rating: 4.2,
    reviews: 10,
    size: "S",
    category: "Men",
    itemName: "Men's Blazer",
    oldPrice: 2999,
    newPrice: 1699,
    discount: 45,
    isTrending: true,
    description: "A sophisticated and stylish blazer for Men.",
    delivery_time: "2-4 business days",
    inStock: true
  },
  {
    _id: 5,
    itemName: "Women's Jeans",
    image: "https://img.freepik.com/premium-photo/pretty-girl-posing-confidently-with-attitude-fashion-shoot-wearing-desi-dress-street_658768-439.jpg?size=626&ext=jpg",
    description: "A comfortable and trendy Dress for women.",
    rating: 4.8,
    reviews: 15,
    size: "M",
    category: "Women",
    oldPrice: 1587,
    newPrice: 890,
    discount: 43,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false
  },
  {
    _id: 6,
    itemName: "Men's Shirt",
    image: "https://img.freepik.com/free-photo/fashion-portrait-young-man-white-shirt-poses-wall-with-contrast-shadows_186202-4512.jpg?size=626&ext=jpg",
    description: "A classic and formal shirt for men.",
    rating: 3.9,
    reviews: 6,
    size: "L",
    category: "Men",
    oldPrice: 1599,
    newPrice: 959,
    discount: 40,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
]
export const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <h2 className='text-center top-margin'>My Cart(6)</h2>
      <div className="cart-main">
        <div className="cart-container">
          {
            dummyCart?.map(product => <SingleCartProduct key={product._id} product={product} />)
          }
        </div>
        <PriceDetails />
      </div>
    </>
  )
}
