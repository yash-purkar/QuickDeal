import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
const dummyCart = [
  {
    _id: 1,
    image: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70",
    rating: 4.3,
    reviews: 210,
    size: "L",
    category: "Men",
    itemName: "Polo",
    oldPrice: 699.99,
    newPrice: 549.99,
    discount: 21,
    isTrending: true
  },
  {
    _id: 2,
    image: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70",
    rating: 4.8,
    reviews: 54,
    size: "M",
    category: "Kids",
    itemName: "Puma",
    oldPrice: 999.99,
    newPrice: 799.99,
    discount: 20,
    isTrending: false
  },
  {
    _id: 3,
    image: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70",
    rating: 4.5,
    reviews: 123,
    size: "XL",
    category: "Women",
    itemName: "Layra",
    oldPrice: 1199.99,
    newPrice: 899.99,
    discount: 25,
    isTrending: true
  }
]
export const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <h2 className='text-center top-margin'>My Cart(3)</h2>
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