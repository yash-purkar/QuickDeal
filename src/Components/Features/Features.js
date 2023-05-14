import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { GiReturnArrow } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'
import './Features.css'

export const Features = () => {
  return (
    <div className='features'>
      <ul className='features-list'>
        <li className='features-list-item'>
          <div className='feature-icon'><FaShippingFast /></div>
          <p className='feature-title'>Free Shipping</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'><RiSecurePaymentLine /></div>
          <p className='feature-title'>Secure Payments</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'><GiReturnArrow /></div>
          <p className='feature-title'>Easy Returns</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'> <BiSupport /></div>
          <p className='feature-title'>24/7 Support</p>
        </li>
      </ul>
    </div>
  )
}
