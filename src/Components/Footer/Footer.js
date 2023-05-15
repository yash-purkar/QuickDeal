import React from 'react'
import { AiOutlineCopyrightCircle, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import './Footer.css'
export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div>
        <span className='copyright'><AiOutlineCopyrightCircle /></span>
        <span className='year'>{year} </span>
        <span className='footer-label'>QuickDeal</span>
      </div>
      <ul className='social-links'>
        <li><a href="https://www.linkedin.com/in/yash-purkar-32a67925a/" target='_blank' rel="noreferrer" className='social-item social-1'><AiFillLinkedin /></a></li>
        <li> <a href="https://github.com/yash-purkar" target='_blank' rel="noreferrer" className='social-item social-2'><AiFillGithub /></a></li>
        <li><a href="https://twitter.com/yashpurkar14" target='_blank' rel="noreferrer" className='social-item social-3'><AiFillTwitterCircle /></a></li>
      </ul>
    </footer>
  )
}
